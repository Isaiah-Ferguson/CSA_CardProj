export interface CodeExample {
  title: string;
  code: string;
  language: string;
  explanation: string;
}

export interface Comparison {
  title: string;
  options: {
    name: string;
    description: string;
    whenToUse: string;
    example: string;
  }[];
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  codeExamples: CodeExample[];
  comparison?: Comparison;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  concepts: Concept[];
}

export interface Level {
  id: string;
  levelNumber: number;
  title: string;
  description: string;
  weeks: Week[];
}

export const levelFour: Level = {
  id: 'level-4',
  levelNumber: 4,
  title: 'Level Four',
  description: 'Internship Preparation - CLEAN API Architecture',
  weeks: [
    {
      id: 'level-4-week-1',
      weekNumber: 1,
      title: 'Clean API Architecture with EF Core',
      description: 'Building scalable APIs using Clean Architecture principles, layered design, and Entity Framework Core',
      concepts: [
        {
          id: 'clean-architecture-intro',
          title: 'Clean Architecture Principles',
          description: 'Understanding layered architecture and separation of concerns',
          keyPoints: [
            'Separate business logic from infrastructure concerns',
            'Dependencies point inward toward the domain',
            'Core layers have no external dependencies',
            'Use interfaces to define contracts between layers',
            'Testable, maintainable, and scalable code structure'
          ],
          codeExamples: [
            {
              title: 'Clean Architecture Layers',
              code: `// Clean Architecture has 4 main layers:

// 1. Domain Layer (Core/Entities)
//    - Business entities and domain logic
//    - No dependencies on other layers
//    - Pure C# classes

namespace MyApp.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        
        // Domain logic
        public void UpdatePrice(decimal newPrice)
        {
            if (newPrice <= 0)
                throw new ArgumentException("Price must be greater than zero");
                
            Price = newPrice;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

// 2. Application Layer (Use Cases/Business Logic)
//    - Application-specific business rules
//    - Defines interfaces for infrastructure
//    - Orchestrates domain objects

namespace MyApp.Application.Interfaces
{
    public interface IProductRepository
    {
        Task<Product?> GetByIdAsync(int id);
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product> AddAsync(Product product);
        Task UpdateAsync(Product product);
        Task DeleteAsync(int id);
    }
}

// 3. Infrastructure Layer
//    - External concerns (database, file system, APIs)
//    - Implements interfaces defined in Application layer
//    - EF Core DbContext lives here

namespace MyApp.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}

// 4. Presentation Layer (API/Controllers)
//    - User interface / API endpoints
//    - Depends on Application layer
//    - Handles HTTP requests/responses

namespace MyApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _repository.GetAllAsync();
            return Ok(products);
        }
    }
}`,
              language: 'csharp',
              explanation: 'Clean Architecture separates concerns into layers. Domain contains business entities with no dependencies. Application defines interfaces and use cases. Infrastructure implements data access. Presentation handles HTTP/UI. Dependencies flow inward toward domain.'
            },
            {
              title: 'Project Structure',
              code: `// Recommended folder structure for Clean Architecture

MyApp/
├── MyApp.Domain/                    // Core business logic
│   ├── Entities/
│   │   ├── Product.cs
│   │   ├── Category.cs
│   │   └── Order.cs
│   ├── Enums/
│   │   └── OrderStatus.cs
│   └── Exceptions/
│       └── DomainException.cs
│
├── MyApp.Application/               // Use cases and interfaces
│   ├── Interfaces/
│   │   ├── IProductRepository.cs
│   │   ├── IUnitOfWork.cs
│   │   └── IEmailService.cs
│   ├── DTOs/
│   │   ├── ProductDto.cs
│   │   └── CreateProductDto.cs
│   ├── Services/
│   │   └── ProductService.cs
│   └── Validators/
│       └── ProductValidator.cs
│
├── MyApp.Infrastructure/            // External dependencies
│   ├── Data/
│   │   ├── ApplicationDbContext.cs
│   │   ├── Repositories/
│   │   │   └── ProductRepository.cs
│   │   └── Configurations/
│   │       └── ProductConfiguration.cs
│   ├── Services/
│   │   └── EmailService.cs
│   └── Migrations/
│
└── MyApp.API/                       // Web API / Presentation
    ├── Controllers/
    │   └── ProductsController.cs
    ├── Program.cs
    ├── appsettings.json
    └── Middleware/
        └── ExceptionHandlingMiddleware.cs

// Dependencies:
// - Domain: No dependencies
// - Application: References Domain only
// - Infrastructure: References Application and Domain
// - API: References Application and Infrastructure`,
              language: 'csharp',
              explanation: 'Organize code into separate projects by layer. Domain is independent. Application references Domain. Infrastructure implements Application interfaces. API references all layers for dependency injection setup. Each layer has clear responsibilities.'
            },
            {
              title: 'Dependency Injection Setup',
              code: `// Program.cs - Configure dependency injection

using Microsoft.EntityFrameworkCore;
using MyApp.Application.Interfaces;
using MyApp.Infrastructure.Data;
using MyApp.Infrastructure.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database Configuration
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// Repository Pattern - Register repositories
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

// Application Services
builder.Services.AddScoped<IProductService, ProductService>();

// Infrastructure Services
builder.Services.AddScoped<IEmailService, EmailService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();`,
              language: 'csharp',
              explanation: 'Register all dependencies in Program.cs. Use AddScoped for per-request lifetime (repositories, services). Configure DbContext with connection string. Register interfaces with their implementations. This enables constructor injection throughout the application.'
            }
          ],
          comparison: {
            title: 'Architecture Patterns',
            options: [
              {
                name: 'Clean Architecture',
                description: 'Layered with dependency inversion',
                whenToUse: 'Large applications, long-term maintenance',
                example: 'Enterprise APIs, complex business logic'
              },
              {
                name: 'N-Tier Architecture',
                description: 'Traditional layered approach',
                whenToUse: 'Medium-sized applications',
                example: 'Standard CRUD applications'
              },
              {
                name: 'Monolithic',
                description: 'All code in one project',
                whenToUse: 'Small applications, prototypes',
                example: 'Simple APIs, learning projects'
              }
            ]
          }
        },
        {
          id: 'repository-pattern',
          title: 'Repository Pattern with EF Core',
          description: 'Abstracting data access logic using the Repository pattern',
          keyPoints: [
            'Repository abstracts data access from business logic',
            'Provides a collection-like interface for entities',
            'Makes code more testable with mock repositories',
            'Centralizes data access logic',
            'Works with Unit of Work pattern for transactions'
          ],
          codeExamples: [
            {
              title: 'Generic Repository Interface',
              code: `// IRepository.cs - Generic repository interface
using System.Linq.Expressions;

namespace MyApp.Application.Interfaces
{
    public interface IRepository<T> where T : class
    {
        // Read operations
        Task<T?> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);
        Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate);
        
        // Write operations
        Task<T> AddAsync(T entity);
        Task AddRangeAsync(IEnumerable<T> entities);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task DeleteRangeAsync(IEnumerable<T> entities);
        
        // Query helpers
        Task<int> CountAsync();
        Task<int> CountAsync(Expression<Func<T, bool>> predicate);
        Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate);
    }
}

// IProductRepository.cs - Specific repository with custom methods
namespace MyApp.Application.Interfaces
{
    public interface IProductRepository : IRepository<Product>
    {
        Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category);
        Task<IEnumerable<Product>> GetProductsInPriceRangeAsync(decimal min, decimal max);
        Task<Product?> GetProductWithDetailsAsync(int id);
    }
}`,
              language: 'csharp',
              explanation: 'Generic repository provides common CRUD operations. Use Expression<Func<T, bool>> for flexible queries. Specific repositories extend generic interface with entity-specific methods. This provides both reusability and customization.'
            },
            {
              title: 'Repository Implementation',
              code: `// Repository.cs - Generic repository implementation
using Microsoft.EntityFrameworkCore;
using MyApp.Application.Interfaces;
using MyApp.Infrastructure.Data;
using System.Linq.Expressions;

namespace MyApp.Infrastructure.Data.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly ApplicationDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.Where(predicate).ToListAsync();
        }

        public async Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.FirstOrDefaultAsync(predicate);
        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            return entity;
        }

        public async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _dbSet.AddRangeAsync(entities);
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(T entity)
        {
            _dbSet.Remove(entity);
            await Task.CompletedTask;
        }

        public async Task DeleteRangeAsync(IEnumerable<T> entities)
        {
            _dbSet.RemoveRange(entities);
            await Task.CompletedTask;
        }

        public async Task<int> CountAsync()
        {
            return await _dbSet.CountAsync();
        }

        public async Task<int> CountAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.CountAsync(predicate);
        }

        public async Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.AnyAsync(predicate);
        }
    }
}`,
              language: 'csharp',
              explanation: 'Generic repository implementation uses DbSet<T> for data access. Protected fields allow derived classes to access context. All methods are async for better performance. Update and Delete use synchronous EF methods but return Task for consistency.'
            },
            {
              title: 'Specific Repository Implementation',
              code: `// ProductRepository.cs - Product-specific repository
using Microsoft.EntityFrameworkCore;
using MyApp.Application.Interfaces;
using MyApp.Domain.Entities;
using MyApp.Infrastructure.Data;

namespace MyApp.Infrastructure.Data.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category)
        {
            return await _dbSet
                .Where(p => p.Category == category)
                .OrderBy(p => p.Name)
                .ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsInPriceRangeAsync(decimal min, decimal max)
        {
            return await _dbSet
                .Where(p => p.Price >= min && p.Price <= max)
                .OrderBy(p => p.Price)
                .ToListAsync();
        }

        public async Task<Product?> GetProductWithDetailsAsync(int id)
        {
            // Example with related data (if Product had navigation properties)
            return await _dbSet
                .Include(p => p.Category)  // If there was a Category navigation property
                .Include(p => p.Reviews)   // If there was a Reviews collection
                .FirstOrDefaultAsync(p => p.Id == id);
        }
    }
}`,
              language: 'csharp',
              explanation: 'Specific repository inherits from generic Repository<T> and implements specific interface. Add custom query methods for entity-specific operations. Use Include() for eager loading related data. Leverage LINQ for complex queries.'
            },
            {
              title: 'Using Repository in Controller',
              code: `// ProductsController.cs
using Microsoft.AspNetCore.Mvc;
using MyApp.Application.Interfaces;
using MyApp.Domain.Entities;

namespace MyApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ProductsController(
            IProductRepository productRepository,
            IUnitOfWork unitOfWork)
        {
            _productRepository = productRepository;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _productRepository.GetAllAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            
            if (product == null)
                return NotFound();
                
            return Ok(product);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetByCategory(string category)
        {
            var products = await _productRepository.GetProductsByCategoryAsync(category);
            return Ok(products);
        }

        [HttpGet("price-range")]
        public async Task<ActionResult<IEnumerable<Product>>> GetByPriceRange(
            [FromQuery] decimal min,
            [FromQuery] decimal max)
        {
            var products = await _productRepository.GetProductsInPriceRangeAsync(min, max);
            return Ok(products);
        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)
        {
            product.CreatedAt = DateTime.UtcNow;
            await _productRepository.AddAsync(product);
            await _unitOfWork.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
                return BadRequest();

            var existing = await _productRepository.GetByIdAsync(id);
            if (existing == null)
                return NotFound();

            existing.Name = product.Name;
            existing.Price = product.Price;
            existing.Category = product.Category;
            existing.UpdatedAt = DateTime.UtcNow;

            await _productRepository.UpdateAsync(existing);
            await _unitOfWork.SaveChangesAsync();
            
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            await _productRepository.DeleteAsync(product);
            await _unitOfWork.SaveChangesAsync();
            
            return NoContent();
        }
    }
}`,
              language: 'csharp',
              explanation: 'Controllers depend on repository interfaces, not implementations. Use repository methods for data access. Call SaveChangesAsync() through Unit of Work after modifications. Repository pattern makes controllers clean and testable.'
            }
          ],
          comparison: {
            title: 'Data Access Patterns',
            options: [
              {
                name: 'Repository Pattern',
                description: 'Abstraction over data access',
                whenToUse: 'Complex queries, multiple data sources, testability',
                example: 'Enterprise applications, clean architecture'
              },
              {
                name: 'Direct DbContext',
                description: 'Use DbContext directly in services',
                whenToUse: 'Simple CRUD, small applications',
                example: 'Prototypes, learning projects'
              },
              {
                name: 'CQRS',
                description: 'Separate read and write models',
                whenToUse: 'Complex domains, high performance needs',
                example: 'Event-sourced systems, microservices'
              }
            ]
          }
        },
        {
          id: 'unit-of-work',
          title: 'Unit of Work Pattern',
          description: 'Managing transactions and coordinating multiple repositories',
          keyPoints: [
            'Coordinates work of multiple repositories',
            'Ensures all changes succeed or fail together',
            'Single SaveChanges() call for transaction',
            'Tracks all changes in single context',
            'Simplifies transaction management'
          ],
          codeExamples: [
            {
              title: 'Unit of Work Interface and Implementation',
              code: `// IUnitOfWork.cs
namespace MyApp.Application.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IProductRepository Products { get; }
        ICategoryRepository Categories { get; }
        IOrderRepository Orders { get; }
        
        Task<int> SaveChangesAsync();
        Task BeginTransactionAsync();
        Task CommitTransactionAsync();
        Task RollbackTransactionAsync();
    }
}

// UnitOfWork.cs
using Microsoft.EntityFrameworkCore.Storage;
using MyApp.Application.Interfaces;
using MyApp.Infrastructure.Data;

namespace MyApp.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        private IDbContextTransaction? _transaction;

        public IProductRepository Products { get; }
        public ICategoryRepository Categories { get; }
        public IOrderRepository Orders { get; }

        public UnitOfWork(
            ApplicationDbContext context,
            IProductRepository productRepository,
            ICategoryRepository categoryRepository,
            IOrderRepository orderRepository)
        {
            _context = context;
            Products = productRepository;
            Categories = categoryRepository;
            Orders = orderRepository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public async Task BeginTransactionAsync()
        {
            _transaction = await _context.Database.BeginTransactionAsync();
        }

        public async Task CommitTransactionAsync()
        {
            try
            {
                await _context.SaveChangesAsync();
                
                if (_transaction != null)
                {
                    await _transaction.CommitAsync();
                }
            }
            catch
            {
                await RollbackTransactionAsync();
                throw;
            }
            finally
            {
                if (_transaction != null)
                {
                    await _transaction.DisposeAsync();
                    _transaction = null;
                }
            }
        }

        public async Task RollbackTransactionAsync()
        {
            if (_transaction != null)
            {
                await _transaction.RollbackAsync();
                await _transaction.DisposeAsync();
                _transaction = null;
            }
        }

        public void Dispose()
        {
            _transaction?.Dispose();
            _context.Dispose();
        }
    }
}`,
              language: 'csharp',
              explanation: 'Unit of Work provides access to all repositories and coordinates SaveChanges(). Single DbContext instance shared across repositories ensures transaction consistency. Explicit transaction methods for complex operations. Implements IDisposable for proper cleanup.'
            },
            {
              title: 'Using Unit of Work in Service Layer',
              code: `// IProductService.cs
namespace MyApp.Application.Interfaces
{
    public interface IProductService
    {
        Task<ProductDto?> GetProductByIdAsync(int id);
        Task<IEnumerable<ProductDto>> GetAllProductsAsync();
        Task<ProductDto> CreateProductAsync(CreateProductDto dto);
        Task UpdateProductAsync(int id, UpdateProductDto dto);
        Task DeleteProductAsync(int id);
        Task<bool> TransferProductToCategoryAsync(int productId, int newCategoryId);
    }
}

// ProductService.cs
using MyApp.Application.Interfaces;
using MyApp.Application.DTOs;
using MyApp.Domain.Entities;

namespace MyApp.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ProductDto?> GetProductByIdAsync(int id)
        {
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            
            if (product == null)
                return null;
                
            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Category = product.Category
            };
        }

        public async Task<IEnumerable<ProductDto>> GetAllProductsAsync()
        {
            var products = await _unitOfWork.Products.GetAllAsync();
            
            return products.Select(p => new ProductDto
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Category = p.Category
            });
        }

        public async Task<ProductDto> CreateProductAsync(CreateProductDto dto)
        {
            var product = new Product
            {
                Name = dto.Name,
                Price = dto.Price,
                Category = dto.Category,
                CreatedAt = DateTime.UtcNow
            };

            await _unitOfWork.Products.AddAsync(product);
            await _unitOfWork.SaveChangesAsync();

            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Category = product.Category
            };
        }

        public async Task UpdateProductAsync(int id, UpdateProductDto dto)
        {
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            
            if (product == null)
                throw new KeyNotFoundException($"Product with ID {id} not found");

            product.Name = dto.Name;
            product.Price = dto.Price;
            product.Category = dto.Category;
            product.UpdatedAt = DateTime.UtcNow;

            await _unitOfWork.Products.UpdateAsync(product);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            
            if (product == null)
                throw new KeyNotFoundException($"Product with ID {id} not found");

            await _unitOfWork.Products.DeleteAsync(product);
            await _unitOfWork.SaveChangesAsync();
        }

        // Example of transaction with multiple repositories
        public async Task<bool> TransferProductToCategoryAsync(int productId, int newCategoryId)
        {
            await _unitOfWork.BeginTransactionAsync();
            
            try
            {
                var product = await _unitOfWork.Products.GetByIdAsync(productId);
                var category = await _unitOfWork.Categories.GetByIdAsync(newCategoryId);
                
                if (product == null || category == null)
                    return false;

                // Update product category
                product.Category = category.Name;
                await _unitOfWork.Products.UpdateAsync(product);
                
                // Update category product count (example)
                category.ProductCount++;
                await _unitOfWork.Categories.UpdateAsync(category);
                
                // Commit transaction
                await _unitOfWork.CommitTransactionAsync();
                return true;
            }
            catch
            {
                await _unitOfWork.RollbackTransactionAsync();
                throw;
            }
        }
    }
}`,
              language: 'csharp',
              explanation: 'Service layer uses Unit of Work to coordinate repositories. Single SaveChangesAsync() commits all changes. Use explicit transactions for multi-repository operations. Service layer handles business logic and DTO mapping. Throw exceptions for not found scenarios.'
            },
            {
              title: 'Controller Using Service Layer',
              code: `// ProductsController.cs
using Microsoft.AspNetCore.Mvc;
using MyApp.Application.Interfaces;
using MyApp.Application.DTOs;

namespace MyApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(
            IProductService productService,
            ILogger<ProductsController> logger)
        {
            _productService = productService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProduct(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            
            if (product == null)
                return NotFound();
                
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<ProductDto>> CreateProduct(CreateProductDto dto)
        {
            try
            {
                var product = await _productService.CreateProductAsync(dto);
                return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating product");
                return StatusCode(500, new { error = "Failed to create product" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, UpdateProductDto dto)
        {
            try
            {
                await _productService.UpdateProductAsync(id, dto);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating product {ProductId}", id);
                return StatusCode(500, new { error = "Failed to update product" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                await _productService.DeleteProductAsync(id);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting product {ProductId}", id);
                return StatusCode(500, new { error = "Failed to delete product" });
            }
        }

        [HttpPost("{productId}/transfer-category/{categoryId}")]
        public async Task<IActionResult> TransferCategory(int productId, int categoryId)
        {
            try
            {
                var success = await _productService.TransferProductToCategoryAsync(productId, categoryId);
                
                if (!success)
                    return NotFound(new { error = "Product or category not found" });
                    
                return Ok(new { message = "Product transferred successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error transferring product {ProductId} to category {CategoryId}", 
                    productId, categoryId);
                return StatusCode(500, new { error = "Failed to transfer product" });
            }
        }
    }
}

// DTOs
namespace MyApp.Application.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;
    }

    public class CreateProductDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;
    }

    public class UpdateProductDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;
    }
}`,
              language: 'csharp',
              explanation: 'Controllers depend on service interfaces, not repositories. Services handle business logic and transactions. Controllers handle HTTP concerns only. Use DTOs to separate API models from domain entities. Catch specific exceptions for appropriate HTTP responses.'
            }
          ],
          comparison: {
            title: 'Transaction Management',
            options: [
              {
                name: 'Unit of Work',
                description: 'Coordinate multiple repositories',
                whenToUse: 'Complex operations, multiple entities',
                example: 'Order with items, user with profile'
              },
              {
                name: 'DbContext.SaveChanges()',
                description: 'Direct context save',
                whenToUse: 'Simple operations, single entity',
                example: 'Basic CRUD operations'
              },
              {
                name: 'TransactionScope',
                description: 'Distributed transactions',
                whenToUse: 'Multiple databases, external resources',
                example: 'Cross-database operations'
              }
            ]
          }
        },
        {
          id: 'ef-core-configuration',
          title: 'EF Core Configuration & Migrations',
          description: 'Configuring Entity Framework Core with Fluent API and managing database migrations',
          keyPoints: [
            'Fluent API for entity configuration',
            'Configure relationships and constraints',
            'Seed initial data',
            'Migrations track database schema changes',
            'Use migration commands to update database'
          ],
          codeExamples: [
            {
              title: 'DbContext Configuration',
              code: `// ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using MyApp.Domain.Entities;
using MyApp.Infrastructure.Data.Configurations;

namespace MyApp.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Apply configurations from separate files
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            
            // Or apply all configurations in assembly
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
    }
}`,
              language: 'csharp',
              explanation: 'DbContext represents database session. DbSet<T> properties represent tables. OnModelCreating() configures entity mappings. Use ApplyConfiguration() for organized configuration. ApplyConfigurationsFromAssembly() auto-discovers all configurations.'
            },
            {
              title: 'Entity Configuration with Fluent API',
              code: `// ProductConfiguration.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyApp.Domain.Entities;

namespace MyApp.Infrastructure.Data.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            // Table name
            builder.ToTable("Products");

            // Primary key
            builder.HasKey(p => p.Id);

            // Properties
            builder.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(p => p.Price)
                .HasColumnType("decimal(18,2)")
                .IsRequired();

            builder.Property(p => p.Category)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(p => p.Description)
                .HasMaxLength(500);

            builder.Property(p => p.CreatedAt)
                .IsRequired()
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(p => p.UpdatedAt)
                .IsRequired(false);

            // Indexes
            builder.HasIndex(p => p.Category)
                .HasDatabaseName("IX_Products_Category");

            builder.HasIndex(p => p.Name)
                .IsUnique()
                .HasDatabaseName("IX_Products_Name_Unique");

            // Seed data
            builder.HasData(
                new Product
                {
                    Id = 1,
                    Name = "Laptop",
                    Price = 999.99m,
                    Category = "Electronics",
                    Description = "High-performance laptop",
                    CreatedAt = DateTime.UtcNow
                },
                new Product
                {
                    Id = 2,
                    Name = "Mouse",
                    Price = 29.99m,
                    Category = "Electronics",
                    Description = "Wireless mouse",
                    CreatedAt = DateTime.UtcNow
                }
            );
        }
    }
}`,
              language: 'csharp',
              explanation: 'IEntityTypeConfiguration<T> separates configuration from DbContext. Configure table name, primary key, properties, constraints. Set column types, max lengths, required fields. Create indexes for performance. Seed initial data with HasData().'
            },
            {
              title: 'Configuring Relationships',
              code: `// OrderConfiguration.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyApp.Domain.Entities;

namespace MyApp.Infrastructure.Data.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Orders");
            builder.HasKey(o => o.Id);

            builder.Property(o => o.OrderNumber)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(o => o.TotalAmount)
                .HasColumnType("decimal(18,2)");

            // One-to-Many: Order has many OrderItems
            builder.HasMany(o => o.OrderItems)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder.ToTable("OrderItems");
            builder.HasKey(oi => oi.Id);

            builder.Property(oi => oi.Quantity)
                .IsRequired();

            builder.Property(oi => oi.UnitPrice)
                .HasColumnType("decimal(18,2)");

            // Many-to-One: OrderItem belongs to Product
            builder.HasOne(oi => oi.Product)
                .WithMany()
                .HasForeignKey(oi => oi.ProductId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

// Domain Entities
namespace MyApp.Domain.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; } = string.Empty;
        public decimal TotalAmount { get; set; }
        public DateTime OrderDate { get; set; }
        
        // Navigation property
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }

    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        
        // Navigation properties
        public Order Order { get; set; } = null!;
        public Product Product { get; set; } = null!;
    }
}`,
              language: 'csharp',
              explanation: 'Configure relationships with HasOne/HasMany/WithOne/WithMany. Set foreign keys with HasForeignKey(). OnDelete() defines cascade behavior. Cascade deletes related entities. Restrict prevents deletion if related entities exist. Navigation properties enable eager loading.'
            },
            {
              title: 'EF Core Migrations',
              code: `// Migration commands (run in Package Manager Console or terminal)

// 1. Add a new migration
dotnet ef migrations add InitialCreate --project MyApp.Infrastructure --startup-project MyApp.API

// 2. Update database to latest migration
dotnet ef database update --project MyApp.Infrastructure --startup-project MyApp.API

// 3. Remove last migration (if not applied to database)
dotnet ef migrations remove --project MyApp.Infrastructure --startup-project MyApp.API

// 4. Generate SQL script from migrations
dotnet ef migrations script --project MyApp.Infrastructure --startup-project MyApp.API

// 5. Update to specific migration
dotnet ef database update SpecificMigrationName --project MyApp.Infrastructure --startup-project MyApp.API

// 6. Revert all migrations
dotnet ef database update 0 --project MyApp.Infrastructure --startup-project MyApp.API

// Example migration file generated:
// 20240405120000_InitialCreate.cs
using Microsoft.EntityFrameworkCore.Migrations;

public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Products",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(maxLength: 100, nullable: false),
                Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                Category = table.Column<string>(maxLength: 50, nullable: false),
                Description = table.Column<string>(maxLength: 500, nullable: true),
                CreatedAt = table.Column<DateTime>(nullable: false, defaultValueSql: "GETUTCDATE()"),
                UpdatedAt = table.Column<DateTime>(nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Products", x => x.Id);
            });

        migrationBuilder.CreateIndex(
            name: "IX_Products_Category",
            table: "Products",
            column: "Category");

        migrationBuilder.InsertData(
            table: "Products",
            columns: new[] { "Id", "Name", "Price", "Category", "Description", "CreatedAt" },
            values: new object[] { 1, "Laptop", 999.99m, "Electronics", "High-performance laptop", DateTime.UtcNow });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "Products");
    }
}

// appsettings.json - Connection string
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=MyAppDb;Trusted_Connection=true;MultipleActiveResultSets=true"
  }
}`,
              language: 'csharp',
              explanation: 'Migrations track database schema changes. Add migration creates snapshot of current model. Update applies migrations to database. Each migration has Up() and Down() methods. Up() applies changes, Down() reverts them. Store connection string in appsettings.json.'
            }
          ],
          comparison: {
            title: 'EF Core Configuration Approaches',
            options: [
              {
                name: 'Fluent API',
                description: 'Code-based configuration',
                whenToUse: 'Complex mappings, relationships, constraints',
                example: 'IEntityTypeConfiguration<T> classes'
              },
              {
                name: 'Data Annotations',
                description: 'Attribute-based configuration',
                whenToUse: 'Simple validation, basic constraints',
                example: '[Required], [MaxLength], [Key]'
              },
              {
                name: 'Conventions',
                description: 'EF Core default behavior',
                whenToUse: 'Standard naming, simple entities',
                example: 'Id property as primary key'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-4-week-2',
      weekNumber: 2,
      title: 'Azure DevOps CI/CD Pipelines',
      description: 'Automating build, test, and deployment with Azure DevOps pipelines',
      concepts: [
        {
          id: 'azure-devops-intro',
          title: 'Azure DevOps Overview',
          description: 'Understanding Azure DevOps services and CI/CD fundamentals',
          keyPoints: [
            'Azure DevOps provides end-to-end DevOps toolchain',
            'CI/CD automates build, test, and deployment processes',
            'Pipelines defined in YAML or classic editor',
            'Supports multiple platforms and languages',
            'Integration with Azure services and third-party tools'
          ],
          codeExamples: [
            {
              title: 'Azure DevOps Services Overview',
              code: `// Azure DevOps Services:

// 1. Azure Repos
//    - Git repositories for source control
//    - Pull requests and code reviews
//    - Branch policies and protection

// 2. Azure Pipelines
//    - CI/CD automation
//    - Build and release pipelines
//    - Multi-stage deployments

// 3. Azure Boards
//    - Work item tracking
//    - Agile planning tools
//    - Sprint management

// 4. Azure Test Plans
//    - Manual and exploratory testing
//    - Test case management

// 5. Azure Artifacts
//    - Package management (NuGet, npm, Maven)
//    - Universal packages

// CI/CD Pipeline Flow:
// 1. Developer commits code to repository
// 2. CI Pipeline triggers automatically
// 3. Code is built and compiled
// 4. Unit tests run
// 5. Artifacts are created
// 6. CD Pipeline deploys to environments
// 7. Integration/E2E tests run
// 8. Production deployment (manual or automatic)`,
              language: 'text',
              explanation: 'Azure DevOps is a complete DevOps platform. CI (Continuous Integration) automatically builds and tests code on commit. CD (Continuous Deployment) automatically deploys to environments. Pipelines orchestrate the entire process from code to production.'
            },
            {
              title: 'Basic Pipeline Structure',
              code: `# azure-pipelines.yml
# Basic structure of an Azure Pipeline

trigger:
  branches:
    include:
      - main
      - develop
  paths:
    exclude:
      - README.md
      - docs/*

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

stages:
  - stage: Build
    displayName: 'Build Stage'
    jobs:
      - job: BuildJob
        displayName: 'Build and Test'
        steps:
          - task: UseDotNet@2
            inputs:
              version: '8.x'
          
          - task: DotNetCoreCLI@2
            displayName: 'Restore dependencies'
            inputs:
              command: 'restore'
          
          - task: DotNetCoreCLI@2
            displayName: 'Build project'
            inputs:
              command: 'build'
              arguments: '--configuration $(buildConfiguration)'
          
          - task: DotNetCoreCLI@2
            displayName: 'Run tests'
            inputs:
              command: 'test'
              arguments: '--configuration $(buildConfiguration) --no-build'

  - stage: Deploy
    displayName: 'Deploy Stage'
    dependsOn: Build
    condition: succeeded()
    jobs:
      - deployment: DeployJob
        displayName: 'Deploy to Azure'
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  inputs:
                    azureSubscription: 'Azure-Connection'
                    appName: 'my-web-app'
                    package: '$(Pipeline.Workspace)/**/*.zip'`,
              language: 'yaml',
              explanation: 'Pipelines use YAML syntax. Trigger defines when pipeline runs. Pool specifies build agent. Stages organize pipeline into logical phases. Jobs contain steps (tasks). Tasks are individual operations like build, test, deploy.'
            },
            {
              title: 'Pipeline Triggers',
              code: `# Different trigger types in Azure Pipelines

# 1. CI Trigger - Runs on code push
trigger:
  branches:
    include:
      - main
      - feature/*
    exclude:
      - experimental/*
  paths:
    include:
      - src/*
    exclude:
      - docs/*

# 2. PR Trigger - Runs on pull requests
pr:
  branches:
    include:
      - main
      - develop
  paths:
    exclude:
      - '*.md'

# 3. Scheduled Trigger - Runs on schedule
schedules:
  - cron: "0 0 * * *"  # Daily at midnight
    displayName: 'Nightly build'
    branches:
      include:
        - main
    always: true  # Run even if no code changes

# 4. Manual Trigger - No automatic trigger
trigger: none
pr: none

# 5. Pipeline Resource Trigger - Runs when another pipeline completes
resources:
  pipelines:
    - pipeline: upstream-pipeline
      source: 'ProjectName/PipelineName'
      trigger:
        branches:
          include:
            - main`,
              language: 'yaml',
              explanation: 'Triggers control when pipelines run. CI triggers on code push. PR triggers on pull requests. Scheduled triggers run at specific times. Manual triggers require user action. Pipeline triggers chain pipelines together.'
            }
          ],
          comparison: {
            title: 'CI/CD Platforms',
            options: [
              {
                name: 'Azure DevOps',
                description: 'Microsoft\'s complete DevOps platform',
                whenToUse: 'Azure deployments, .NET projects, enterprise',
                example: 'ASP.NET Core apps, Azure App Service'
              },
              {
                name: 'GitHub Actions',
                description: 'GitHub-native CI/CD',
                whenToUse: 'GitHub repos, open source, multi-platform',
                example: 'Node.js, Python, containerized apps'
              },
              {
                name: 'Jenkins',
                description: 'Self-hosted automation server',
                whenToUse: 'On-premise, custom requirements',
                example: 'Legacy systems, custom workflows'
              }
            ]
          }
        },
        {
          id: 'build-pipeline',
          title: 'Build Pipeline Configuration',
          description: 'Creating CI pipelines for .NET applications',
          keyPoints: [
            'Build pipelines compile and test code automatically',
            'Use tasks for restore, build, test, publish',
            'Publish build artifacts for deployment',
            'Run code quality and security scans',
            'Cache dependencies for faster builds'
          ],
          codeExamples: [
            {
              title: 'Complete .NET Build Pipeline',
              code: `# azure-pipelines-build.yml
# Complete CI pipeline for .NET Web API

trigger:
  branches:
    include:
      - main
      - develop
  paths:
    exclude:
      - README.md
      - .gitignore

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'
  dotnetVersion: '8.x'
  projectPath: 'src/MyApp.API/MyApp.API.csproj'
  testProjectPath: 'tests/MyApp.Tests/MyApp.Tests.csproj'

stages:
  - stage: Build
    displayName: 'Build and Test'
    jobs:
      - job: BuildJob
        displayName: 'Build .NET Application'
        steps:
          # Install .NET SDK
          - task: UseDotNet@2
            displayName: 'Install .NET SDK'
            inputs:
              version: '$(dotnetVersion)'
              includePreviewVersions: false

          # Restore NuGet packages
          - task: DotNetCoreCLI@2
            displayName: 'Restore NuGet packages'
            inputs:
              command: 'restore'
              projects: '**/*.csproj'
              feedsToUse: 'select'

          # Build the solution
          - task: DotNetCoreCLI@2
            displayName: 'Build solution'
            inputs:
              command: 'build'
              projects: '**/*.csproj'
              arguments: '--configuration $(buildConfiguration) --no-restore'

          # Run unit tests
          - task: DotNetCoreCLI@2
            displayName: 'Run unit tests'
            inputs:
              command: 'test'
              projects: '$(testProjectPath)'
              arguments: '--configuration $(buildConfiguration) --no-build --collect:"XPlat Code Coverage"'
              publishTestResults: true

          # Publish code coverage
          - task: PublishCodeCoverageResults@1
            displayName: 'Publish code coverage'
            inputs:
              codeCoverageTool: 'Cobertura'
              summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'

          # Publish the application
          - task: DotNetCoreCLI@2
            displayName: 'Publish application'
            inputs:
              command: 'publish'
              publishWebProjects: false
              projects: '$(projectPath)'
              arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)'
              zipAfterPublish: true

          # Publish build artifacts
          - task: PublishBuildArtifacts@1
            displayName: 'Publish artifacts'
            inputs:
              PathtoPublish: '$(Build.ArtifactStagingDirectory)'
              ArtifactName: 'drop'
              publishLocation: 'Container'`,
              language: 'yaml',
              explanation: 'Complete build pipeline for .NET apps. UseDotNet installs SDK. Restore gets NuGet packages. Build compiles code. Test runs unit tests with coverage. Publish creates deployment package. PublishBuildArtifacts makes output available for deployment.'
            },
            {
              title: 'Multi-Project Build Pipeline',
              code: `# azure-pipelines-multi-project.yml
# Build pipeline for solution with multiple projects

trigger:
  - main

pool:
  vmImage: 'windows-latest'

variables:
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'

stages:
  - stage: Build
    jobs:
      - job: BuildAll
        steps:
          # Restore all projects
          - task: NuGetToolInstaller@1
            displayName: 'Install NuGet'

          - task: NuGetCommand@2
            displayName: 'Restore solution'
            inputs:
              restoreSolution: '$(solution)'

          # Build entire solution
          - task: VSBuild@1
            displayName: 'Build solution'
            inputs:
              solution: '$(solution)'
              platform: '$(buildPlatform)'
              configuration: '$(buildConfiguration)'

          # Run tests for all test projects
          - task: VSTest@2
            displayName: 'Run all tests'
            inputs:
              platform: '$(buildPlatform)'
              configuration: '$(buildConfiguration)'
              testAssemblyVer2: |
                **\\*Tests.dll
                !**\\*TestAdapter.dll
                !**\\obj\\**
              codeCoverageEnabled: true

          # Publish API project
          - task: DotNetCoreCLI@2
            displayName: 'Publish API'
            inputs:
              command: 'publish'
              publishWebProjects: false
              projects: '**/MyApp.API.csproj'
              arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)/api'
              zipAfterPublish: true

          # Publish Worker project
          - task: DotNetCoreCLI@2
            displayName: 'Publish Worker'
            inputs:
              command: 'publish'
              publishWebProjects: false
              projects: '**/MyApp.Worker.csproj'
              arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)/worker'
              zipAfterPublish: true

          # Publish all artifacts
          - task: PublishBuildArtifacts@1
            inputs:
              PathtoPublish: '$(Build.ArtifactStagingDirectory)'
              ArtifactName: 'drop'`,
              language: 'yaml',
              explanation: 'Build multiple projects in single pipeline. Use solution file to build all projects together. Publish different projects to separate folders. VSBuild for full .NET Framework. DotNetCoreCLI for .NET Core/5+. Organize artifacts by project type.'
            },
            {
              title: 'Build with Docker',
              code: `# azure-pipelines-docker.yml
# Build and push Docker container

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  dockerRegistryServiceConnection: 'MyDockerRegistry'
  imageRepository: 'myapp'
  containerRegistry: 'myregistry.azurecr.io'
  dockerfilePath: '$(Build.SourcesDirectory)/Dockerfile'
  tag: '$(Build.BuildId)'

stages:
  - stage: Build
    displayName: 'Build and Push'
    jobs:
      - job: Docker
        displayName: 'Build Docker Image'
        steps:
          # Build Docker image
          - task: Docker@2
            displayName: 'Build Docker image'
            inputs:
              command: 'build'
              repository: '$(imageRepository)'
              dockerfile: '$(dockerfilePath)'
              containerRegistry: '$(dockerRegistryServiceConnection)'
              tags: |
                $(tag)
                latest

          # Run container security scan
          - task: AquaSecurityScanner@4
            displayName: 'Scan for vulnerabilities'
            inputs:
              image: '$(containerRegistry)/$(imageRepository):$(tag)'
              scanType: 'local'

          # Push to container registry
          - task: Docker@2
            displayName: 'Push to registry'
            inputs:
              command: 'push'
              repository: '$(imageRepository)'
              containerRegistry: '$(dockerRegistryServiceConnection)'
              tags: |
                $(tag)
                latest

          # Publish Kubernetes manifests
          - task: PublishBuildArtifacts@1
            displayName: 'Publish K8s manifests'
            inputs:
              PathtoPublish: '$(Build.SourcesDirectory)/k8s'
              ArtifactName: 'manifests'`,
              language: 'yaml',
              explanation: 'Build Docker containers in pipeline. Docker@2 task builds and pushes images. Tag with build ID for versioning. Scan for security vulnerabilities. Push to Azure Container Registry. Publish Kubernetes manifests for deployment.'
            },
            {
              title: 'Build Optimization with Caching',
              code: `# azure-pipelines-cached.yml
# Optimized build with dependency caching

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages
  npm_config_cache: $(Pipeline.Workspace)/.npm

stages:
  - stage: Build
    jobs:
      - job: BuildWithCache
        steps:
          # Cache NuGet packages
          - task: Cache@2
            displayName: 'Cache NuGet packages'
            inputs:
              key: 'nuget | "$(Agent.OS)" | **/packages.lock.json'
              restoreKeys: |
                nuget | "$(Agent.OS)"
                nuget
              path: $(NUGET_PACKAGES)

          # Cache npm packages (if using frontend)
          - task: Cache@2
            displayName: 'Cache npm packages'
            inputs:
              key: 'npm | "$(Agent.OS)" | package-lock.json'
              restoreKeys: |
                npm | "$(Agent.OS)"
              path: $(npm_config_cache)

          # Install .NET SDK
          - task: UseDotNet@2
            inputs:
              version: '8.x'

          # Restore with cache
          - task: DotNetCoreCLI@2
            displayName: 'Restore packages'
            inputs:
              command: 'restore'
              projects: '**/*.csproj'
            env:
              NUGET_PACKAGES: $(NUGET_PACKAGES)

          # Build
          - task: DotNetCoreCLI@2
            displayName: 'Build'
            inputs:
              command: 'build'
              arguments: '--configuration Release --no-restore'

          # Test
          - task: DotNetCoreCLI@2
            displayName: 'Test'
            inputs:
              command: 'test'
              arguments: '--configuration Release --no-build'

          # Publish
          - task: DotNetCoreCLI@2
            displayName: 'Publish'
            inputs:
              command: 'publish'
              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'
              zipAfterPublish: true

          - task: PublishBuildArtifacts@1
            inputs:
              PathtoPublish: '$(Build.ArtifactStagingDirectory)'
              ArtifactName: 'drop'`,
              language: 'yaml',
              explanation: 'Cache@2 task speeds up builds by caching dependencies. Cache NuGet and npm packages between runs. Use lock files as cache keys. Restore from cache before downloading. Significantly reduces build time for large projects.'
            }
          ],
          comparison: {
            title: 'Build Approaches',
            options: [
              {
                name: 'YAML Pipelines',
                description: 'Code-based pipeline definition',
                whenToUse: 'Version control, code review, reusability',
                example: 'Modern projects, infrastructure as code'
              },
              {
                name: 'Classic Pipelines',
                description: 'GUI-based pipeline editor',
                whenToUse: 'Simple pipelines, visual preference',
                example: 'Legacy projects, quick setup'
              },
              {
                name: 'Multi-stage YAML',
                description: 'Combined build and release',
                whenToUse: 'End-to-end automation, complex workflows',
                example: 'Microservices, multiple environments'
              }
            ]
          }
        },
        {
          id: 'release-pipeline',
          title: 'Release and Deployment Pipelines',
          description: 'Deploying applications to Azure with CD pipelines',
          keyPoints: [
            'Release pipelines deploy artifacts to environments',
            'Support multiple deployment strategies',
            'Environment-specific configurations',
            'Approval gates for production deployments',
            'Rollback capabilities for failed deployments'
          ],
          codeExamples: [
            {
              title: 'Multi-Stage Deployment Pipeline',
              code: `# azure-pipelines-release.yml
# Multi-stage deployment to Dev, Staging, and Production

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  azureSubscription: 'Azure-Service-Connection'
  webAppName: 'my-web-app'

stages:
  # Build Stage
  - stage: Build
    displayName: 'Build Application'
    jobs:
      - job: BuildJob
        steps:
          - task: UseDotNet@2
            inputs:
              version: '8.x'

          - task: DotNetCoreCLI@2
            displayName: 'Build and Publish'
            inputs:
              command: 'publish'
              publishWebProjects: true
              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'
              zipAfterPublish: true

          - task: PublishBuildArtifacts@1
            inputs:
              PathtoPublish: '$(Build.ArtifactStagingDirectory)'
              ArtifactName: 'drop'

  # Deploy to Development
  - stage: DeployDev
    displayName: 'Deploy to Development'
    dependsOn: Build
    condition: succeeded()
    jobs:
      - deployment: DeployDevJob
        displayName: 'Deploy to Dev'
        environment: 'development'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  displayName: 'Deploy to Dev App Service'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    appName: '$(webAppName)-dev'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    deploymentMethod: 'auto'

  # Deploy to Staging
  - stage: DeployStaging
    displayName: 'Deploy to Staging'
    dependsOn: DeployDev
    condition: succeeded()
    jobs:
      - deployment: DeployStgJob
        displayName: 'Deploy to Staging'
        environment: 'staging'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  displayName: 'Deploy to Staging App Service'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    appName: '$(webAppName)-staging'
                    package: '$(Pipeline.Workspace)/**/*.zip'

                - task: AzureAppServiceManage@0
                  displayName: 'Run smoke tests'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    Action: 'Start Azure App Service'
                    WebAppName: '$(webAppName)-staging'

  # Deploy to Production
  - stage: DeployProduction
    displayName: 'Deploy to Production'
    dependsOn: DeployStaging
    condition: succeeded()
    jobs:
      - deployment: DeployProdJob
        displayName: 'Deploy to Production'
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  displayName: 'Deploy to Production App Service'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    appName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    deploymentMethod: 'zipDeploy'`,
              language: 'yaml',
              explanation: 'Multi-stage pipeline deploys to multiple environments sequentially. Each stage depends on previous stage success. Use environment keyword for approvals and deployment history. Different app names for each environment. Production requires manual approval in environment settings.'
            },
            {
              title: 'Blue-Green Deployment',
              code: `# azure-pipelines-blue-green.yml
# Blue-Green deployment strategy for zero-downtime

stages:
  - stage: Deploy
    jobs:
      - deployment: BlueGreenDeploy
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                # Deploy to staging slot (green)
                - task: AzureWebApp@1
                  displayName: 'Deploy to Staging Slot'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    appName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    deployToSlotOrASE: true
                    resourceGroupName: '$(resourceGroup)'
                    slotName: 'staging'

                # Warm up staging slot
                - task: PowerShell@2
                  displayName: 'Warm up staging slot'
                  inputs:
                    targetType: 'inline'
                    script: |
                      $url = "https://$(webAppName)-staging.azurewebsites.net/health"
                      for ($i = 0; $i -lt 5; $i++) {
                        Invoke-WebRequest -Uri $url -UseBasicParsing
                        Start-Sleep -Seconds 2
                      }

                # Run smoke tests on staging
                - task: PowerShell@2
                  displayName: 'Run smoke tests'
                  inputs:
                    targetType: 'inline'
                    script: |
                      $response = Invoke-WebRequest -Uri "https://$(webAppName)-staging.azurewebsites.net/api/health" -UseBasicParsing
                      if ($response.StatusCode -ne 200) {
                        throw "Smoke test failed"
                      }

                # Swap slots (green becomes blue)
                - task: AzureAppServiceManage@0
                  displayName: 'Swap Slots'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    Action: 'Swap Slots'
                    WebAppName: '$(webAppName)'
                    ResourceGroupName: '$(resourceGroup)'
                    SourceSlot: 'staging'
                    SwapWithProduction: true

                # Verify production
                - task: PowerShell@2
                  displayName: 'Verify production'
                  inputs:
                    targetType: 'inline'
                    script: |
                      Start-Sleep -Seconds 10
                      $response = Invoke-WebRequest -Uri "https://$(webAppName).azurewebsites.net/api/health" -UseBasicParsing
                      if ($response.StatusCode -ne 200) {
                        Write-Host "##vso[task.logissue type=error]Production verification failed"
                        # Swap back if verification fails
                        az webapp deployment slot swap -g $(resourceGroup) -n $(webAppName) --slot staging --target-slot production
                        throw "Production verification failed, rolled back"
                      }`,
              language: 'yaml',
              explanation: 'Blue-Green deployment eliminates downtime. Deploy to staging slot first. Run tests on staging. Swap slots to make staging live. Production traffic instantly switches. Easy rollback by swapping back. Verify production after swap.'
            },
            {
              title: 'Deployment with Variable Groups',
              code: `# azure-pipelines-variables.yml
# Using variable groups for environment-specific configuration

trigger:
  - main

variables:
  - group: 'Common-Variables'  # Shared across all environments

stages:
  - stage: DeployDev
    variables:
      - group: 'Dev-Variables'  # Dev-specific variables
    jobs:
      - deployment: DeployDevJob
        environment: 'development'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureRmWebAppDeployment@4
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    WebAppName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    AppSettings: |
                      -ConnectionStrings__DefaultConnection "$(dbConnectionString)"
                      -AppSettings__ApiKey "$(apiKey)"
                      -AppSettings__Environment "Development"
                      -ASPNETCORE_ENVIRONMENT "Development"

  - stage: DeployProd
    variables:
      - group: 'Prod-Variables'  # Prod-specific variables
    jobs:
      - deployment: DeployProdJob
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureRmWebAppDeployment@4
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appType: 'webApp'
                    WebAppName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    AppSettings: |
                      -ConnectionStrings__DefaultConnection "$(dbConnectionString)"
                      -AppSettings__ApiKey "$(apiKey)"
                      -AppSettings__Environment "Production"
                      -ASPNETCORE_ENVIRONMENT "Production"
                      -ApplicationInsights__InstrumentationKey "$(appInsightsKey)"

# Variable Groups in Azure DevOps Library:
# 
# Common-Variables:
#   - azureSubscription: 'Azure-Connection'
#   - webAppName: 'my-app'
#
# Dev-Variables:
#   - dbConnectionString: 'Server=dev-db;...'
#   - apiKey: 'dev-api-key'
#
# Prod-Variables:
#   - dbConnectionString: 'Server=prod-db;...'  (marked as secret)
#   - apiKey: 'prod-api-key'  (marked as secret)
#   - appInsightsKey: 'prod-insights-key'  (marked as secret)`,
              language: 'yaml',
              explanation: 'Variable groups store environment-specific configuration. Define in Azure DevOps Library. Reference with "group" keyword. Mark secrets as secret in UI. Override app settings during deployment. Different values per environment without code changes.'
            },
            {
              title: 'Database Migration in Pipeline',
              code: `# azure-pipelines-db-migration.yml
# Deploy with EF Core database migrations

stages:
  - stage: DeployWithMigration
    jobs:
      - deployment: DeployJob
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                # Download build artifacts
                - download: current
                  artifact: drop

                # Run database migrations
                - task: PowerShell@2
                  displayName: 'Run EF Core Migrations'
                  inputs:
                    targetType: 'inline'
                    script: |
                      # Install EF Core tools
                      dotnet tool install --global dotnet-ef
                      
                      # Extract published app
                      Expand-Archive -Path "$(Pipeline.Workspace)/drop/*.zip" -DestinationPath "$(Pipeline.Workspace)/app"
                      
                      # Run migrations
                      cd "$(Pipeline.Workspace)/app"
                      dotnet ef database update --connection "$(dbConnectionString)"
                  env:
                    dbConnectionString: $(ConnectionString)

                # Backup database before deployment
                - task: AzureCLI@2
                  displayName: 'Backup database'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    scriptType: 'bash'
                    scriptLocation: 'inlineScript'
                    inlineScript: |
                      az sql db export \
                        --resource-group $(resourceGroup) \
                        --server $(sqlServerName) \
                        --name $(databaseName) \
                        --admin-user $(sqlAdminUser) \
                        --admin-password $(sqlAdminPassword) \
                        --storage-key $(storageKey) \
                        --storage-key-type StorageAccessKey \
                        --storage-uri "https://$(storageAccount).blob.core.windows.net/backups/$(Build.BuildId).bacpac"

                # Deploy application
                - task: AzureWebApp@1
                  displayName: 'Deploy App Service'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/drop/*.zip'

                # Run post-deployment health check
                - task: PowerShell@2
                  displayName: 'Health check'
                  inputs:
                    targetType: 'inline'
                    script: |
                      $maxRetries = 5
                      $retryCount = 0
                      $success = $false
                      
                      while ($retryCount -lt $maxRetries -and -not $success) {
                        try {
                          $response = Invoke-WebRequest -Uri "https://$(webAppName).azurewebsites.net/health" -UseBasicParsing
                          if ($response.StatusCode -eq 200) {
                            $success = $true
                            Write-Host "Health check passed"
                          }
                        }
                        catch {
                          $retryCount++
                          Write-Host "Health check failed, retry $retryCount of $maxRetries"
                          Start-Sleep -Seconds 10
                        }
                      }
                      
                      if (-not $success) {
                        throw "Health check failed after $maxRetries attempts"
                      }`,
              language: 'yaml',
              explanation: 'Run database migrations as part of deployment. Install EF Core tools in pipeline. Execute migrations before app deployment. Backup database before changes. Run health checks after deployment. Fail pipeline if health check fails.'
            }
          ],
          comparison: {
            title: 'Deployment Strategies',
            options: [
              {
                name: 'Blue-Green',
                description: 'Two identical environments, instant switch',
                whenToUse: 'Zero downtime, easy rollback',
                example: 'Production web apps, customer-facing'
              },
              {
                name: 'Canary',
                description: 'Gradual rollout to subset of users',
                whenToUse: 'Risk mitigation, gradual validation',
                example: 'Large user base, A/B testing'
              },
              {
                name: 'Rolling',
                description: 'Update instances one at a time',
                whenToUse: 'Multiple instances, resource constraints',
                example: 'Kubernetes, VM scale sets'
              }
            ]
          }
        },
        {
          id: 'pipeline-best-practices',
          title: 'Pipeline Best Practices',
          description: 'Security, optimization, and maintenance of CI/CD pipelines',
          keyPoints: [
            'Use service connections for secure authentication',
            'Store secrets in Azure Key Vault',
            'Implement approval gates for production',
            'Use templates for reusable pipeline code',
            'Monitor pipeline performance and failures'
          ],
          codeExamples: [
            {
              title: 'Pipeline Templates',
              code: `# templates/build-template.yml
# Reusable build template

parameters:
  - name: projectPath
    type: string
  - name: buildConfiguration
    type: string
    default: 'Release'
  - name: runTests
    type: boolean
    default: true

steps:
  - task: UseDotNet@2
    displayName: 'Install .NET SDK'
    inputs:
      version: '8.x'

  - task: DotNetCoreCLI@2
    displayName: 'Restore packages'
    inputs:
      command: 'restore'
      projects: '\${{ parameters.projectPath }}'

  - task: DotNetCoreCLI@2
    displayName: 'Build project'
    inputs:
      command: 'build'
      projects: '\${{ parameters.projectPath }}'
      arguments: '--configuration \${{ parameters.buildConfiguration }} --no-restore'

  - \${{ if eq(parameters.runTests, true) }}:
    - task: DotNetCoreCLI@2
      displayName: 'Run tests'
      inputs:
        command: 'test'
        projects: '\${{ parameters.projectPath }}'
        arguments: '--configuration \${{ parameters.buildConfiguration }} --no-build'

  - task: DotNetCoreCLI@2
    displayName: 'Publish project'
    inputs:
      command: 'publish'
      projects: '\${{ parameters.projectPath }}'
      arguments: '--configuration \${{ parameters.buildConfiguration }} --output $(Build.ArtifactStagingDirectory)'
      zipAfterPublish: true

# azure-pipelines.yml
# Using the template

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

stages:
  - stage: BuildAPI
    jobs:
      - job: BuildAPIJob
        steps:
          - template: templates/build-template.yml
            parameters:
              projectPath: 'src/MyApp.API/MyApp.API.csproj'
              buildConfiguration: 'Release'
              runTests: true

  - stage: BuildWorker
    jobs:
      - job: BuildWorkerJob
        steps:
          - template: templates/build-template.yml
            parameters:
              projectPath: 'src/MyApp.Worker/MyApp.Worker.csproj'
              buildConfiguration: 'Release'
              runTests: false`,
              language: 'yaml',
              explanation: 'Templates promote code reuse across pipelines. Define parameters for customization. Use conditional logic with ${{ if }}. Reference templates with "template" keyword. Pass parameters to customize behavior. Maintain templates separately for easier updates.'
            },
            {
              title: 'Secrets Management with Key Vault',
              code: `# azure-pipelines-keyvault.yml
# Using Azure Key Vault for secrets

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  - group: 'KeyVault-Secrets'  # Variable group linked to Key Vault

stages:
  - stage: Deploy
    jobs:
      - deployment: DeployJob
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                # Retrieve secrets from Key Vault
                - task: AzureKeyVault@2
                  displayName: 'Get secrets from Key Vault'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    KeyVaultName: 'my-keyvault'
                    SecretsFilter: '*'  # Get all secrets, or specify: 'DbPassword,ApiKey'
                    RunAsPreJob: false

                # Use secrets in deployment
                - task: AzureWebApp@1
                  displayName: 'Deploy with secrets'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'
                    AppSettings: |
                      -ConnectionStrings__DefaultConnection "Server=$(DbServer);Database=$(DbName);User Id=$(DbUser);Password=$(DbPassword);"
                      -AppSettings__ApiKey "$(ApiKey)"
                      -AppSettings__StorageConnectionString "$(StorageConnectionString)"

# Azure Key Vault Setup:
# 1. Create Key Vault in Azure Portal
# 2. Add secrets: DbPassword, ApiKey, StorageConnectionString
# 3. Grant pipeline service principal access to Key Vault
# 4. Create variable group linked to Key Vault in Azure DevOps

# Service Connection Setup:
# 1. Project Settings > Service connections
# 2. New service connection > Azure Resource Manager
# 3. Service principal (automatic)
# 4. Grant permissions to Key Vault`,
              language: 'yaml',
              explanation: 'Never store secrets in pipeline YAML. Use Azure Key Vault for secret storage. AzureKeyVault task retrieves secrets at runtime. Secrets available as pipeline variables. Grant service principal access to Key Vault. Link variable groups to Key Vault.'
            },
            {
              title: 'Pipeline with Approvals and Gates',
              code: `# azure-pipelines-approvals.yml
# Multi-stage pipeline with manual approvals

trigger:
  - main

stages:
  - stage: Build
    jobs:
      - job: BuildJob
        steps:
          - script: echo "Building application"
          - task: PublishBuildArtifacts@1
            inputs:
              PathtoPublish: '$(Build.ArtifactStagingDirectory)'
              ArtifactName: 'drop'

  - stage: DeployDev
    dependsOn: Build
    jobs:
      - deployment: DeployDevJob
        environment: 'development'  # No approval required
        strategy:
          runOnce:
            deploy:
              steps:
                - script: echo "Deploying to Dev"

  - stage: DeployStaging
    dependsOn: DeployDev
    jobs:
      - deployment: DeployStgJob
        environment: 'staging'  # Approval configured in environment
        strategy:
          runOnce:
            deploy:
              steps:
                - script: echo "Deploying to Staging"
                
                # Run integration tests
                - task: DotNetCoreCLI@2
                  displayName: 'Run integration tests'
                  inputs:
                    command: 'test'
                    projects: '**/IntegrationTests.csproj'

  - stage: DeployProduction
    dependsOn: DeployStaging
    jobs:
      - deployment: DeployProdJob
        environment: 'production'  # Requires approval from multiple approvers
        strategy:
          runOnce:
            deploy:
              steps:
                - script: echo "Deploying to Production"

# Environment Configuration (in Azure DevOps UI):
#
# Development Environment:
#   - No approvals required
#   - Automatic deployment
#
# Staging Environment:
#   - Approvals: 1 approver required
#   - Approvers: Dev Team Lead
#   - Timeout: 24 hours
#
# Production Environment:
#   - Approvals: 2 approvers required
#   - Approvers: Dev Team Lead, Operations Manager
#   - Timeout: 72 hours
#   - Gates: 
#     - Query Work Items (no active bugs)
#     - Azure Monitor alerts (no active alerts)
#   - Deployment window: Business hours only`,
              language: 'yaml',
              explanation: 'Configure approvals in environment settings, not YAML. Set required approvers per environment. Add timeout for approval decisions. Use gates to check conditions before deployment. Query work items to block if bugs exist. Check monitoring alerts before production.'
            },
            {
              title: 'Pipeline Monitoring and Notifications',
              code: `# azure-pipelines-notifications.yml
# Pipeline with monitoring and notifications

trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

stages:
  - stage: Build
    jobs:
      - job: BuildJob
        steps:
          - task: UseDotNet@2
            inputs:
              version: '8.x'

          - task: DotNetCoreCLI@2
            displayName: 'Build'
            inputs:
              command: 'build'
              arguments: '--configuration Release'

          # Send notification on build failure
          - task: PowerShell@2
            displayName: 'Notify on failure'
            condition: failed()
            inputs:
              targetType: 'inline'
              script: |
                $body = @{
                  text = "Build failed for $(Build.Repository.Name) - $(Build.SourceBranchName)"
                  build_url = "$(System.TeamFoundationCollectionUri)$(System.TeamProject)/_build/results?buildId=$(Build.BuildId)"
                } | ConvertTo-Json
                
                Invoke-RestMethod -Uri "$(slackWebhook)" -Method Post -Body $body -ContentType 'application/json'

  - stage: Deploy
    dependsOn: Build
    condition: succeeded()
    jobs:
      - deployment: DeployJob
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    appName: '$(webAppName)'
                    package: '$(Pipeline.Workspace)/**/*.zip'

                # Send success notification
                - task: PowerShell@2
                  displayName: 'Notify on success'
                  condition: succeeded()
                  inputs:
                    targetType: 'inline'
                    script: |
                      $body = @{
                        text = "✅ Successfully deployed $(Build.Repository.Name) to Production"
                        version = "$(Build.BuildNumber)"
                        deployed_by = "$(Build.RequestedFor)"
                      } | ConvertTo-Json
                      
                      Invoke-RestMethod -Uri "$(slackWebhook)" -Method Post -Body $body -ContentType 'application/json'

                # Log deployment to Application Insights
                - task: AzureCLI@2
                  displayName: 'Log deployment event'
                  inputs:
                    azureSubscription: '$(azureSubscription)'
                    scriptType: 'bash'
                    scriptLocation: 'inlineScript'
                    inlineScript: |
                      az monitor app-insights events show \
                        --app $(appInsightsName) \
                        --resource-group $(resourceGroup) \
                        --type customEvents \
                        --event-type Deployment \
                        --start-time "$(Build.StartTime)" \
                        --end-time "$(Build.FinishTime)"

# Notification Setup:
# 1. Create Slack webhook or Teams webhook
# 2. Store webhook URL in pipeline variables (mark as secret)
# 3. Configure Azure DevOps notifications:
#    - Project Settings > Notifications
#    - New subscription > Build completes
#    - Filter by pipeline and result
#    - Send to email/Teams channel`,
              language: 'yaml',
              explanation: 'Monitor pipeline execution with notifications. Send alerts on failure or success. Use condition: failed() or succeeded(). Integrate with Slack, Teams, or email. Log deployments to Application Insights. Configure notifications in Azure DevOps settings.'
            }
          ],
          comparison: {
            title: 'Secret Storage Options',
            options: [
              {
                name: 'Azure Key Vault',
                description: 'Centralized secret management',
                whenToUse: 'Production secrets, multiple pipelines',
                example: 'Connection strings, API keys, certificates'
              },
              {
                name: 'Pipeline Variables',
                description: 'Encrypted variables in pipeline',
                whenToUse: 'Pipeline-specific secrets, simple setup',
                example: 'Build tokens, test credentials'
              },
              {
                name: 'Variable Groups',
                description: 'Shared variables across pipelines',
                whenToUse: 'Common configuration, team sharing',
                example: 'Service endpoints, shared settings'
              }
            ]
          }
        }
      ]
    }
  ]
};
