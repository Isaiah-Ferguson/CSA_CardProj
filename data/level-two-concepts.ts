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

export const levelTwo: Level = {
  id: 'level-2',
  levelNumber: 2,
  title: 'Level Two',
  description: 'API Development - dotNet, C#, and RESTful APIs',
  weeks: [
    {
      id: 'level-2-week-1',
      weekNumber: 1,
      title: 'Introduction to Web APIs',
      description: 'Building RESTful APIs with .NET, Controllers, Services, and HTTP methods',
      concepts: [
        {
          id: 'dotnet-web-api',
          title: '.NET Web API Basics',
          description: 'Understanding Web APIs and setting up a .NET API project',
          keyPoints: [
            'Web APIs enable communication between client and server over HTTP',
            'REST (Representational State Transfer) is the most common API architecture',
            '.NET provides built-in support for creating Web APIs',
            'APIs return data (usually JSON) instead of HTML views',
            'Use Program.cs to configure services and middleware'
          ],
          codeExamples: [
            {
              title: 'Creating a .NET Web API Project',
              code: `// Command line - Create new Web API project
dotnet new webapi -n MyFirstApi
cd MyFirstApi
dotnet run

// Program.cs - Basic API setup
var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();`,
              language: 'csharp',
              explanation: 'Create a new Web API project with dotnet CLI. Program.cs configures services (AddControllers) and middleware. Swagger provides API documentation. MapControllers() enables routing to controller endpoints.'
            },
            {
              title: 'Understanding REST Principles',
              code: `// REST uses HTTP methods for CRUD operations:
// GET    - Read/Retrieve data
// POST   - Create new data
// PUT    - Update existing data
// DELETE - Remove data

// Example REST endpoints:
// GET    /api/products        - Get all products
// GET    /api/products/5      - Get product with ID 5
// POST   /api/products        - Create new product
// PUT    /api/products/5      - Update product with ID 5
// DELETE /api/products/5      - Delete product with ID 5

// REST principles:
// 1. Stateless - Each request contains all needed information
// 2. Client-Server - Separation of concerns
// 3. Uniform Interface - Consistent endpoint structure
// 4. Resource-based - URLs represent resources (nouns, not verbs)`,
              language: 'csharp',
              explanation: 'REST uses standard HTTP methods for operations. Endpoints are resource-based (use nouns). Each HTTP method has a specific purpose. URLs should be predictable and consistent.'
            },
            {
              title: 'API Response Format (JSON)',
              code: `// C# Model
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
}

// API returns JSON automatically
// GET /api/products/1 returns:
{
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics"
}

// List of products
// GET /api/products returns:
[
    {
        "id": 1,
        "name": "Laptop",
        "price": 999.99,
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "Mouse",
        "price": 29.99,
        "category": "Electronics"
    }
]

// .NET automatically serializes C# objects to JSON
// Client receives JSON, can deserialize to objects`,
              language: 'csharp',
              explanation: '.NET automatically converts C# objects to JSON. Property names become JSON keys (camelCase by default). Arrays/Lists become JSON arrays. No manual serialization needed.'
            },
            {
              title: 'API Project Structure',
              code: `// Typical .NET Web API structure:
MyFirstApi/
├── Controllers/          // API endpoints
│   └── ProductsController.cs
├── Models/              // Data models
│   └── Product.cs
├── Services/            // Business logic
│   └── ProductService.cs
├── Program.cs           // App configuration
├── appsettings.json     // Configuration settings
└── MyFirstApi.csproj    // Project file

// Models/Product.cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// appsettings.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  },
  "AllowedHosts": "*"
}`,
              language: 'csharp',
              explanation: 'Organize code into folders: Controllers for endpoints, Models for data structures, Services for business logic. Program.cs is the entry point. appsettings.json stores configuration.'
            },
            {
              title: 'Testing API with Swagger',
              code: `// Swagger is automatically included in new Web API projects
// Access at: https://localhost:5001/swagger

// Program.cs - Swagger configuration
builder.Services.AddSwaggerGen();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Swagger provides:
// 1. Interactive API documentation
// 2. Test endpoints directly in browser
// 3. See request/response formats
// 4. View all available endpoints
// 5. Try different HTTP methods

// Alternative testing tools:
// - Postman (desktop app)
// - Thunder Client (VS Code extension)
// - curl (command line)
// - Browser DevTools (for GET requests)

// Example curl command:
// curl -X GET "https://localhost:5001/api/products" -H "accept: application/json"`,
              language: 'csharp',
              explanation: 'Swagger provides interactive API documentation and testing. Access at /swagger endpoint. Test all HTTP methods without writing code. Essential for API development and debugging.'
            }
          ],
          comparison: {
            title: 'API vs Web Application',
            options: [
              {
                name: 'Web API',
                description: 'Returns data (JSON/XML), no UI',
                whenToUse: 'Building backend for mobile apps, SPAs, or other services',
                example: 'Returns: { "name": "Product", "price": 99.99 }'
              },
              {
                name: 'MVC Web App',
                description: 'Returns HTML views with data',
                whenToUse: 'Traditional server-rendered web applications',
                example: 'Returns: <html><body>Product: $99.99</body></html>'
              },
              {
                name: 'Hybrid',
                description: 'Both API endpoints and views',
                whenToUse: 'Single project serving both web pages and API',
                example: 'Has both Controllers and API Controllers'
              }
            ]
          }
        },
        {
          id: 'controllers',
          title: 'Controllers',
          description: 'Creating API controllers to handle HTTP requests',
          keyPoints: [
            'Controllers handle incoming HTTP requests',
            'Inherit from ControllerBase for APIs (not Controller)',
            'Use [ApiController] attribute for automatic features',
            'Use [Route] attribute to define endpoint paths',
            'Methods map to HTTP verbs (GET, POST, PUT, DELETE)'
          ],
          codeExamples: [
            {
              title: 'Basic Controller Structure',
              code: `using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // Controller methods go here
    }
}

// [ApiController] provides:
// - Automatic model validation
// - Automatic 400 responses for invalid models
// - Binding source parameter inference
// - Problem details for error responses

// [Route("api/[controller]")] means:
// - Base route is /api/products
// - [controller] is replaced with controller name minus "Controller"
// - ProductsController -> /api/products`,
              language: 'csharp',
              explanation: 'Controllers inherit from ControllerBase. [ApiController] adds automatic features. [Route] defines base URL. Controller name determines endpoint (Products -> /api/products).'
            },
            {
              title: 'Controller with Multiple Endpoints',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    // GET: api/products
    [HttpGet]
    public List<Product> GetAll()
    {
        return new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 999.99m },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m }
        };
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return new Product { Id = id, Name = "Laptop", Price = 999.99m };
    }

    // GET: api/products/search?name=laptop
    [HttpGet("search")]
    public List<Product> Search(string name)
    {
        // Search logic here
        return new List<Product>();
    }
}

// Route combinations:
// [Route("api/[controller]")] + [HttpGet] = GET /api/products
// [Route("api/[controller]")] + [HttpGet("{id}")] = GET /api/products/5
// [Route("api/[controller]")] + [HttpGet("search")] = GET /api/products/search`,
              language: 'csharp',
              explanation: '[HttpGet] maps to GET requests. {id} is a route parameter. Additional route segments like "search" create specific endpoints. Query parameters (name) come from URL query string.'
            },
            {
              title: 'Route Parameters and Query Strings',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    // Route parameter: /api/products/5
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return new Product { Id = id };
    }

    // Multiple route parameters: /api/products/1/reviews/5
    [HttpGet("{productId}/reviews/{reviewId}")]
    public string GetReview(int productId, int reviewId)
    {
        return $"Product {productId}, Review {reviewId}";
    }

    // Query string: /api/products/search?category=electronics&minPrice=100
    [HttpGet("search")]
    public List<Product> Search(string category, decimal? minPrice)
    {
        // Filter products by category and minPrice
        return new List<Product>();
    }

    // Combining both: /api/products/5/related?limit=10
    [HttpGet("{id}/related")]
    public List<Product> GetRelated(int id, int limit = 5)
    {
        return new List<Product>();
    }
}

// Route parameters: Required, part of URL path
// Query parameters: Optional (use nullable types or default values)`,
              language: 'csharp',
              explanation: 'Route parameters in {braces} are required and part of URL path. Query parameters come after ? in URL. Use nullable types or defaults for optional query parameters. Can combine both.'
            },
            {
              title: 'Controller Constructor and Dependency Injection',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    // Constructor - dependencies injected automatically
    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }
}

// Program.cs - Register service
builder.Services.AddScoped<ProductService>();

// Dependency Injection benefits:
// - Loose coupling
// - Easier testing
// - Centralized configuration
// - Automatic lifetime management`,
              language: 'csharp',
              explanation: 'Controllers receive dependencies through constructor. Services must be registered in Program.cs. Use private readonly fields to store injected services. Call service methods from controller actions.'
            },
            {
              title: 'Controller Best Practices',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // ✅ GOOD: Thin controller, delegates to service
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    // ❌ BAD: Business logic in controller
    [HttpGet("bad-example")]
    public List<Product> GetAllBad()
    {
        var products = new List<Product>();
        // Don't do database access here
        // Don't do complex calculations here
        // Don't do validation logic here
        return products;
    }

    // ✅ GOOD: Clear, descriptive method names
    [HttpGet("active")]
    public List<Product> GetActiveProducts()
    {
        return _productService.GetActiveProducts();
    }

    // ✅ GOOD: Use appropriate HTTP methods
    [HttpPost]
    public Product Create(Product product)
    {
        return _productService.CreateProduct(product);
    }
}

// Controller responsibilities:
// 1. Receive HTTP request
// 2. Validate input (automatic with [ApiController])
// 3. Call service method
// 4. Return response
// 
// NOT controller responsibilities:
// - Database access
// - Business logic
// - Complex calculations`,
              language: 'csharp',
              explanation: 'Keep controllers thin - only handle HTTP concerns. Delegate business logic to services. Use clear method names. Follow single responsibility principle. Controllers orchestrate, services implement.'
            }
          ],
          comparison: {
            title: 'Controller Types',
            options: [
              {
                name: 'ControllerBase',
                description: 'Base class for API controllers (no view support)',
                whenToUse: 'Building Web APIs that return data (recommended for APIs)',
                example: 'public class ProductsController : ControllerBase'
              },
              {
                name: 'Controller',
                description: 'Includes view support for MVC',
                whenToUse: 'Building MVC web applications with views',
                example: 'public class HomeController : Controller'
              },
              {
                name: 'Minimal APIs',
                description: 'Define endpoints directly in Program.cs',
                whenToUse: 'Simple APIs, microservices, quick prototypes',
                example: 'app.MapGet("/api/products", () => products);'
              }
            ]
          }
        },
        {
          id: 'services',
          title: 'Services (Business Logic)',
          description: 'Creating service classes to handle business logic and data operations',
          keyPoints: [
            'Services contain business logic separate from controllers',
            'Services handle data access and manipulation',
            'Register services in Program.cs for dependency injection',
            'Use constructor injection to access services',
            'Services promote code reusability and testability'
          ],
          codeExamples: [
            {
              title: 'Basic Service Class',
              code: `// Services/ProductService.cs
public class ProductService
{
    private List<Product> _products;

    public ProductService()
    {
        // Initialize with sample data
        _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 999.99m, Category = "Electronics" },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m, Category = "Electronics" },
            new Product { Id = 3, Name = "Desk", Price = 299.99m, Category = "Furniture" }
        };
    }

    public List<Product> GetAllProducts()
    {
        return _products;
    }

    public Product GetProductById(int id)
    {
        return _products.FirstOrDefault(p => p.Id == id);
    }
}

// Program.cs - Register service
builder.Services.AddScoped<ProductService>();

// Service lifetimes:
// - Scoped: Created once per request
// - Transient: Created every time it's requested
// - Singleton: Created once for application lifetime`,
              language: 'csharp',
              explanation: 'Services are plain C# classes with business logic. Store data in private fields. Provide public methods for operations. Register in Program.cs with appropriate lifetime (Scoped is most common).'
            },
            {
              title: 'Service with CRUD Operations',
              code: `public class ProductService
{
    private List<Product> _products;
    private int _nextId;

    public ProductService()
    {
        _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 999.99m },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m }
        };
        _nextId = 3;
    }

    // READ - Get all
    public List<Product> GetAllProducts()
    {
        return _products;
    }

    // READ - Get by ID
    public Product GetProductById(int id)
    {
        return _products.FirstOrDefault(p => p.Id == id);
    }

    // CREATE
    public Product CreateProduct(Product product)
    {
        product.Id = _nextId++;
        _products.Add(product);
        return product;
    }

    // UPDATE
    public Product UpdateProduct(int id, Product updatedProduct)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product != null)
        {
            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;
            product.Category = updatedProduct.Category;
        }
        return product;
    }

    // DELETE
    public bool DeleteProduct(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product != null)
        {
            _products.Remove(product);
            return true;
        }
        return false;
    }
}`,
              language: 'csharp',
              explanation: 'Services implement CRUD operations (Create, Read, Update, Delete). Each operation is a separate method. Return appropriate data types (object, list, bool). Handle null cases when item not found.'
            },
            {
              title: 'Service with Business Logic',
              code: `public class ProductService
{
    private List<Product> _products;

    public ProductService()
    {
        _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 999.99m, Category = "Electronics", Stock = 10 },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m, Category = "Electronics", Stock = 50 }
        };
    }

    // Business logic: Search with filters
    public List<Product> SearchProducts(string category, decimal? minPrice, decimal? maxPrice)
    {
        var results = _products.AsQueryable();

        if (!string.IsNullOrEmpty(category))
        {
            results = results.Where(p => p.Category == category);
        }

        if (minPrice.HasValue)
        {
            results = results.Where(p => p.Price >= minPrice.Value);
        }

        if (maxPrice.HasValue)
        {
            results = results.Where(p => p.Price <= maxPrice.Value);
        }

        return results.ToList();
    }

    // Business logic: Check stock availability
    public bool IsInStock(int productId, int quantity)
    {
        var product = _products.FirstOrDefault(p => p.Id == productId);
        return product != null && product.Stock >= quantity;
    }

    // Business logic: Apply discount
    public Product ApplyDiscount(int productId, decimal discountPercent)
    {
        var product = _products.FirstOrDefault(p => p.Id == productId);
        if (product != null)
        {
            product.Price = product.Price * (1 - discountPercent / 100);
        }
        return product;
    }

    // Business logic: Get low stock products
    public List<Product> GetLowStockProducts(int threshold = 10)
    {
        return _products.Where(p => p.Stock < threshold).ToList();
    }
}`,
              language: 'csharp',
              explanation: 'Services contain business logic like filtering, calculations, and validations. Use LINQ for querying data. Handle optional parameters with nullable types. Return meaningful results based on business rules.'
            },
            {
              title: 'Using Service in Controller',
              code: `// Controller using ProductService
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // GET: api/products
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }

    // GET: api/products/search?category=Electronics&minPrice=50
    [HttpGet("search")]
    public List<Product> Search(string category, decimal? minPrice, decimal? maxPrice)
    {
        return _productService.SearchProducts(category, minPrice, maxPrice);
    }

    // POST: api/products
    [HttpPost]
    public Product Create(Product product)
    {
        return _productService.CreateProduct(product);
    }

    // PUT: api/products/5
    [HttpPut("{id}")]
    public Product Update(int id, Product product)
    {
        return _productService.UpdateProduct(id, product);
    }

    // DELETE: api/products/5
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        return _productService.DeleteProduct(id);
    }
}`,
              language: 'csharp',
              explanation: 'Controller receives service through constructor injection. Each controller method calls corresponding service method. Controller handles HTTP routing, service handles logic. Clean separation of concerns.'
            },
            {
              title: 'Service Best Practices',
              code: `// ✅ GOOD: Service with single responsibility
public class ProductService
{
    private List<Product> _products;

    public List<Product> GetAllProducts() { /* ... */ }
    public Product GetProductById(int id) { /* ... */ }
    public Product CreateProduct(Product product) { /* ... */ }
}

// ✅ GOOD: Separate services for different concerns
public class OrderService
{
    public List<Order> GetAllOrders() { /* ... */ }
    public Order CreateOrder(Order order) { /* ... */ }
}

public class EmailService
{
    public void SendOrderConfirmation(Order order) { /* ... */ }
}

// ❌ BAD: Service doing too many things
public class EverythingService
{
    public List<Product> GetProducts() { /* ... */ }
    public List<Order> GetOrders() { /* ... */ }
    public void SendEmail() { /* ... */ }
    public void ProcessPayment() { /* ... */ }
}

// ✅ GOOD: Service methods return data
public Product CreateProduct(Product product)
{
    product.Id = _nextId++;
    _products.Add(product);
    return product; // Return created product
}

// ✅ GOOD: Validate in service
public Product CreateProduct(Product product)
{
    if (string.IsNullOrEmpty(product.Name))
    {
        throw new ArgumentException("Product name is required");
    }

    if (product.Price <= 0)
    {
        throw new ArgumentException("Price must be greater than 0");
    }

    product.Id = _nextId++;
    _products.Add(product);
    return product;
}`,
              language: 'csharp',
              explanation: 'Keep services focused on single responsibility. Create separate services for different domains. Validate data in services. Return meaningful data from methods. Throw exceptions for invalid input.'
            }
          ],
          comparison: {
            title: 'Service Lifetimes',
            options: [
              {
                name: 'Scoped',
                description: 'Created once per HTTP request',
                whenToUse: 'Most services, especially those with state per request (recommended)',
                example: 'builder.Services.AddScoped<ProductService>();'
              },
              {
                name: 'Transient',
                description: 'Created every time requested',
                whenToUse: 'Lightweight, stateless services',
                example: 'builder.Services.AddTransient<EmailService>();'
              },
              {
                name: 'Singleton',
                description: 'Created once for entire application',
                whenToUse: 'Shared state, caching, configuration (use carefully)',
                example: 'builder.Services.AddSingleton<CacheService>();'
              }
            ]
          }
        },
        {
          id: 'return-types',
          title: 'Return Types',
          description: 'Understanding different return types for API methods',
          keyPoints: [
            'Return the actual data type for simple cases',
            'Return specific types (Product, List<Product>) for clarity',
            'Null returns become 204 No Content automatically',
            'Return bool for success/failure operations',
            'Keep return types simple and predictable'
          ],
          codeExamples: [
            {
              title: 'Basic Return Types',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // Return single object
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
        // Returns 200 OK with product JSON
        // Returns 204 No Content if null
    }

    // Return list/collection
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
        // Returns 200 OK with array of products
    }

    // Return primitive type
    [HttpGet("count")]
    public int GetCount()
    {
        return _productService.GetAllProducts().Count;
        // Returns 200 OK with number
    }

    // Return string
    [HttpGet("status")]
    public string GetStatus()
    {
        return "API is running";
        // Returns 200 OK with string
    }
}`,
              language: 'csharp',
              explanation: 'Return the actual data type your method produces. .NET automatically serializes to JSON. Null returns become 204 No Content. Lists return as JSON arrays. Primitives return as-is.'
            },
            {
              title: 'Return Types for CRUD Operations',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // CREATE - Return created object
    [HttpPost]
    public Product Create(Product product)
    {
        var created = _productService.CreateProduct(product);
        return created;
        // Returns 200 OK with created product
        // Client can see the new ID
    }

    // READ - Return object or list
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }

    // UPDATE - Return updated object
    [HttpPut("{id}")]
    public Product Update(int id, Product product)
    {
        var updated = _productService.UpdateProduct(id, product);
        return updated;
        // Returns updated product or null (204) if not found
    }

    // DELETE - Return bool for success/failure
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        return _productService.DeleteProduct(id);
        // Returns true (200 OK) or false (200 OK)
    }

    // Alternative DELETE - Return deleted object
    [HttpDelete("alt/{id}")]
    public Product DeleteAlt(int id)
    {
        var product = _productService.GetProductById(id);
        if (product != null)
        {
            _productService.DeleteProduct(id);
        }
        return product;
        // Returns deleted product or null (204)
    }
}`,
              language: 'csharp',
              explanation: 'CREATE/UPDATE return the object so client sees changes. DELETE can return bool (success/failure) or the deleted object. Return types communicate operation results clearly.'
            },
            {
              title: 'Custom Response Objects',
              code: `// Custom response model
public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; }
    public T Data { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // Return custom response
    [HttpGet("{id}")]
    public ApiResponse<Product> GetById(int id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            return new ApiResponse<Product>
            {
                Success = false,
                Message = "Product not found",
                Data = null
            };
        }

        return new ApiResponse<Product>
        {
            Success = true,
            Message = "Product retrieved successfully",
            Data = product
        };
    }

    // Return list with metadata
    [HttpGet]
    public ApiResponse<List<Product>> GetAll()
    {
        var products = _productService.GetAllProducts();

        return new ApiResponse<List<Product>>
        {
            Success = true,
            Message = $"Retrieved {products.Count} products",
            Data = products
        };
    }
}

// Response JSON:
{
    "success": true,
    "message": "Product retrieved successfully",
    "data": {
        "id": 1,
        "name": "Laptop",
        "price": 999.99
    }
}`,
              language: 'csharp',
              explanation: 'Create custom response classes for consistent API responses. Include success flag, message, and data. Useful for providing context with responses. Client always knows response structure.'
            },
            {
              title: 'Handling Null and Not Found',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // Simple approach - return null
    [HttpGet("simple/{id}")]
    public Product GetByIdSimple(int id)
    {
        return _productService.GetProductById(id);
        // Returns 200 OK with product
        // Returns 204 No Content if null
    }

    // Check for null and return appropriate response
    [HttpGet("checked/{id}")]
    public Product GetByIdChecked(int id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            // Still returns null, but you could log or do other actions
            Console.WriteLine($"Product {id} not found");
        }

        return product;
    }

    // Return default value instead of null
    [HttpGet("default/{id}")]
    public Product GetByIdDefault(int id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            return new Product
            {
                Id = 0,
                Name = "Not Found",
                Price = 0
            };
        }

        return product;
    }

    // Return empty list instead of null
    [HttpGet("search")]
    public List<Product> Search(string name)
    {
        var results = _productService.SearchProducts(name, null, null);
        return results ?? new List<Product>();
        // Always returns a list, never null
    }
}`,
              language: 'csharp',
              explanation: 'Returning null gives 204 No Content. Check for null to log or handle specially. Return default objects or empty lists to avoid null. Choose approach based on API design preferences.'
            },
            {
              title: 'Return Type Best Practices',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // ✅ GOOD: Return specific type
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    // ✅ GOOD: Return created object
    [HttpPost]
    public Product Create(Product product)
    {
        return _productService.CreateProduct(product);
    }

    // ✅ GOOD: Return bool for yes/no operations
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        return _productService.DeleteProduct(id);
    }

    // ✅ GOOD: Consistent return types
    [HttpGet("active")]
    public List<Product> GetActive()
    {
        return _productService.GetActiveProducts();
    }

    [HttpGet("inactive")]
    public List<Product> GetInactive()
    {
        return _productService.GetInactiveProducts();
    }

    // ❌ BAD: Inconsistent return types
    [HttpGet("bad-active")]
    public List<Product> GetActiveBad()
    {
        return _productService.GetActiveProducts();
    }

    [HttpGet("bad-inactive")]
    public Product[] GetInactiveBad() // Different type!
    {
        return _productService.GetInactiveProducts().ToArray();
    }
}

// Best practices:
// 1. Use specific types, not object
// 2. Be consistent across similar endpoints
// 3. Return the data clients need
// 4. Keep it simple - return what makes sense`,
              language: 'csharp',
              explanation: 'Use specific return types for clarity. Be consistent across similar endpoints. Return data that makes sense for the operation. Avoid returning object or dynamic types. Keep it simple and predictable.'
            }
          ],
          comparison: {
            title: 'Return Type Choices',
            options: [
              {
                name: 'Specific Type',
                description: 'Return Product, List<Product>, etc.',
                whenToUse: 'Most cases - simple and clear (recommended for now)',
                example: 'public Product GetById(int id) { return product; }'
              },
              {
                name: 'Custom Response',
                description: 'Return ApiResponse<T> wrapper',
                whenToUse: 'Need consistent response structure with metadata',
                example: 'public ApiResponse<Product> Get() { return new ApiResponse<Product>(); }'
              },
              {
                name: 'ActionResult (Later)',
                description: 'Return IActionResult or ActionResult<T>',
                whenToUse: 'Need full control over HTTP status codes (learn later)',
                example: 'public ActionResult<Product> Get() { return Ok(product); }'
              }
            ]
          }
        },
        {
          id: 'http-methods',
          title: 'HTTP Methods',
          description: 'Using HTTP verbs to perform CRUD operations',
          keyPoints: [
            'GET retrieves data (read-only, no side effects)',
            'POST creates new resources',
            'PUT updates existing resources',
            'DELETE removes resources',
            'Use appropriate HTTP method for each operation'
          ],
          codeExamples: [
            {
              title: 'HTTP GET - Retrieve Data',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // GET: api/products
    // Get all products
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    // GET: api/products/5
    // Get single product by ID
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }

    // GET: api/products/category/electronics
    // Get products by category
    [HttpGet("category/{category}")]
    public List<Product> GetByCategory(string category)
    {
        return _productService.GetProductsByCategory(category);
    }

    // GET: api/products/search?name=laptop&minPrice=500
    // Search with query parameters
    [HttpGet("search")]
    public List<Product> Search(string name, decimal? minPrice)
    {
        return _productService.SearchProducts(name, minPrice, null);
    }
}

// GET characteristics:
// - Safe (doesn't modify data)
// - Idempotent (same result every time)
// - Cacheable
// - Data in URL (route params or query string)`,
              language: 'csharp',
              explanation: 'GET retrieves data without modifying it. Use route parameters for required values (ID). Use query parameters for optional filters. GET requests should be safe and idempotent.'
            },
            {
              title: 'HTTP POST - Create New Resource',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // POST: api/products
    // Create new product
    [HttpPost]
    public Product Create(Product product)
    {
        var created = _productService.CreateProduct(product);
        return created;
    }

    // POST: api/products/bulk
    // Create multiple products
    [HttpPost("bulk")]
    public List<Product> CreateMultiple(List<Product> products)
    {
        var created = new List<Product>();
        foreach (var product in products)
        {
            created.Add(_productService.CreateProduct(product));
        }
        return created;
    }
}

// Request body (JSON):
{
    "name": "New Laptop",
    "price": 1299.99,
    "category": "Electronics"
}

// Response (created product with ID):
{
    "id": 4,
    "name": "New Laptop",
    "price": 1299.99,
    "category": "Electronics"
}

// POST characteristics:
// - Creates new resource
// - Data in request body (JSON)
// - Not idempotent (creates new each time)
// - Returns created resource with generated ID`,
              language: 'csharp',
              explanation: 'POST creates new resources. Data comes from request body as JSON. Return the created object including generated ID. Client sends data without ID, server assigns ID.'
            },
            {
              title: 'HTTP PUT - Update Existing Resource',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // PUT: api/products/5
    // Update entire product
    [HttpPut("{id}")]
    public Product Update(int id, Product product)
    {
        var updated = _productService.UpdateProduct(id, product);
        return updated;
    }

    // PUT: api/products/5/price
    // Update specific field
    [HttpPut("{id}/price")]
    public Product UpdatePrice(int id, decimal newPrice)
    {
        var product = _productService.GetProductById(id);
        if (product != null)
        {
            product.Price = newPrice;
            _productService.UpdateProduct(id, product);
        }
        return product;
    }
}

// Request URL: PUT /api/products/5
// Request body (JSON):
{
    "name": "Updated Laptop",
    "price": 899.99,
    "category": "Electronics"
}

// Response (updated product):
{
    "id": 5,
    "name": "Updated Laptop",
    "price": 899.99,
    "category": "Electronics"
}

// PUT characteristics:
// - Updates existing resource
// - ID in URL, data in body
// - Idempotent (same result if repeated)
// - Replaces entire resource`,
              language: 'csharp',
              explanation: 'PUT updates existing resources. ID comes from URL, new data from request body. Return updated object or null if not found. PUT is idempotent - same result if called multiple times.'
            },
            {
              title: 'HTTP DELETE - Remove Resource',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // DELETE: api/products/5
    // Delete single product
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        return _productService.DeleteProduct(id);
    }

    // DELETE: api/products/category/electronics
    // Delete all products in category
    [HttpDelete("category/{category}")]
    public int DeleteByCategory(string category)
    {
        return _productService.DeleteProductsByCategory(category);
    }

    // DELETE: api/products/clear
    // Delete all products (be careful!)
    [HttpDelete("clear")]
    public int DeleteAll()
    {
        return _productService.DeleteAllProducts();
    }
}

// Request: DELETE /api/products/5
// No request body needed

// Response options:
// 1. Return bool: true (deleted) or false (not found)
// 2. Return deleted object
// 3. Return count of deleted items

// DELETE characteristics:
// - Removes resource
// - ID in URL
// - Idempotent (same result if repeated)
// - No request body needed`,
              language: 'csharp',
              explanation: 'DELETE removes resources. ID comes from URL. No request body needed. Return bool (success/failure), deleted object, or count. DELETE is idempotent - safe to call multiple times.'
            },
            {
              title: 'Complete CRUD Controller',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    // CREATE - POST
    [HttpPost]
    public Product Create(Product product)
    {
        return _productService.CreateProduct(product);
    }

    // READ - GET (all)
    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    // READ - GET (single)
    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }

    // UPDATE - PUT
    [HttpPut("{id}")]
    public Product Update(int id, Product product)
    {
        return _productService.UpdateProduct(id, product);
    }

    // DELETE - DELETE
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        return _productService.DeleteProduct(id);
    }
}

// CRUD mapping:
// Create  -> POST   /api/products
// Read    -> GET    /api/products (all)
// Read    -> GET    /api/products/5 (one)
// Update  -> PUT    /api/products/5
// Delete  -> DELETE /api/products/5`,
              language: 'csharp',
              explanation: 'Complete CRUD controller with all HTTP methods. POST creates, GET reads, PUT updates, DELETE removes. Each method has specific purpose. This is the standard REST API pattern.'
            }
          ],
          comparison: {
            title: 'HTTP Methods',
            options: [
              {
                name: 'GET',
                description: 'Retrieve data (read-only)',
                whenToUse: 'Getting data, searching, filtering',
                example: 'GET /api/products/5'
              },
              {
                name: 'POST',
                description: 'Create new resource',
                whenToUse: 'Adding new items, submitting forms',
                example: 'POST /api/products (body: new product data)'
              },
              {
                name: 'PUT',
                description: 'Update existing resource',
                whenToUse: 'Editing/updating existing items',
                example: 'PUT /api/products/5 (body: updated data)'
              },
              {
                name: 'DELETE',
                description: 'Remove resource',
                whenToUse: 'Deleting items',
                example: 'DELETE /api/products/5'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-2-week-2',
      weekNumber: 2,
      title: 'EF Core & Advanced API Concepts',
      description: 'Entity Framework Core, Interfaces, ActionResult types, DbContext, Migrations, and CORS',
      concepts: [
        {
          id: 'interfaces',
          title: 'Interfaces in Services',
          description: 'Using interfaces to define contracts for services and improve testability',
          keyPoints: [
            'Interfaces define contracts (what methods a class must implement)',
            'Enable dependency injection with abstraction',
            'Improve testability by allowing mock implementations',
            'Follow naming convention: prefix with "I" (IProductService)',
            'Program to interfaces, not implementations'
          ],
          codeExamples: [
            {
              title: 'Creating an Interface',
              code: `// IProductService.cs - Interface definition
public interface IProductService
{
    List<Product> GetAllProducts();
    Product GetProductById(int id);
    Product CreateProduct(Product product);
    Product UpdateProduct(int id, Product product);
    bool DeleteProduct(int id);
}

// ProductService.cs - Implementation
public class ProductService : IProductService
{
    private List<Product> _products;
    private int _nextId;

    public ProductService()
    {
        _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 999.99m },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m }
        };
        _nextId = 3;
    }

    public List<Product> GetAllProducts()
    {
        return _products;
    }

    public Product GetProductById(int id)
    {
        return _products.FirstOrDefault(p => p.Id == id);
    }

    public Product CreateProduct(Product product)
    {
        product.Id = _nextId++;
        _products.Add(product);
        return product;
    }

    public Product UpdateProduct(int id, Product product)
    {
        var existing = _products.FirstOrDefault(p => p.Id == id);
        if (existing != null)
        {
            existing.Name = product.Name;
            existing.Price = product.Price;
        }
        return existing;
    }

    public bool DeleteProduct(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product != null)
        {
            _products.Remove(product);
            return true;
        }
        return false;
    }
}`,
              language: 'csharp',
              explanation: 'Interface defines method signatures without implementation. Class implements interface with : IProductService. All interface methods must be implemented. Interfaces enable loose coupling.'
            },
            {
              title: 'Registering Interface with Dependency Injection',
              code: `// Program.cs - Register interface and implementation
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Register interface with implementation
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();

app.MapControllers();
app.Run();

// Controller - Inject interface, not concrete class
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    // Inject interface
    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public List<Product> GetAll()
    {
        return _productService.GetAllProducts();
    }

    [HttpGet("{id}")]
    public Product GetById(int id)
    {
        return _productService.GetProductById(id);
    }
}

// Benefits:
// - Controller depends on interface, not concrete implementation
// - Can swap implementations without changing controller
// - Easier to test with mock implementations`,
              language: 'csharp',
              explanation: 'Register interface with AddScoped<IInterface, Implementation>(). Controller receives interface through constructor. Can swap implementations without changing controller code. Enables testing with mocks.'
            },
            {
              title: 'Multiple Implementations',
              code: `// Interface
public interface INotificationService
{
    void SendNotification(string message);
}

// Email implementation
public class EmailNotificationService : INotificationService
{
    public void SendNotification(string message)
    {
        Console.WriteLine($"Sending email: {message}");
        // Email sending logic
    }
}

// SMS implementation
public class SmsNotificationService : INotificationService
{
    public void SendNotification(string message)
    {
        Console.WriteLine($"Sending SMS: {message}");
        // SMS sending logic
    }
}

// Program.cs - Choose implementation
// Use email in production
builder.Services.AddScoped<INotificationService, EmailNotificationService>();

// OR use SMS
// builder.Services.AddScoped<INotificationService, SmsNotificationService>();

// Controller uses interface
public class OrdersController : ControllerBase
{
    private readonly INotificationService _notificationService;

    public OrdersController(INotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    [HttpPost]
    public Order CreateOrder(Order order)
    {
        // Create order...
        
        _notificationService.SendNotification("Order created!");
        
        return order;
    }
}

// Controller doesn't know which implementation it's using
// Can switch between Email/SMS without changing controller`,
              language: 'csharp',
              explanation: 'Multiple classes can implement same interface. Switch implementations by changing registration in Program.cs. Controller code stays the same. Useful for different environments or strategies.'
            },
            {
              title: 'Interface Segregation',
              code: `// ❌ BAD: Fat interface with too many methods
public interface IProductService
{
    List<Product> GetAllProducts();
    Product GetProductById(int id);
    Product CreateProduct(Product product);
    Product UpdateProduct(int id, Product product);
    bool DeleteProduct(int id);
    void SendProductEmail(int productId);
    void GenerateProductReport();
    void ExportToExcel();
}

// ✅ GOOD: Separate interfaces for different concerns
public interface IProductService
{
    List<Product> GetAllProducts();
    Product GetProductById(int id);
    Product CreateProduct(Product product);
    Product UpdateProduct(int id, Product product);
    bool DeleteProduct(int id);
}

public interface IProductEmailService
{
    void SendProductEmail(int productId);
}

public interface IProductReportService
{
    void GenerateProductReport();
    void ExportToExcel();
}

// Controller can inject only what it needs
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;
    
    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }
}

public class ProductReportsController : ControllerBase
{
    private readonly IProductReportService _reportService;
    
    public ProductReportsController(IProductReportService reportService)
    {
        _reportService = reportService;
    }
}`,
              language: 'csharp',
              explanation: 'Keep interfaces focused and small (Interface Segregation Principle). Split large interfaces into smaller, specific ones. Classes implement only interfaces they need. Easier to maintain and test.'
            },
            {
              title: 'Interface Best Practices',
              code: `// ✅ GOOD: Clear interface naming
public interface IProductService { }
public interface IOrderService { }
public interface IEmailService { }

// ✅ GOOD: Async methods in interface
public interface IProductService
{
    Task<List<Product>> GetAllProductsAsync();
    Task<Product> GetProductByIdAsync(int id);
    Task<Product> CreateProductAsync(Product product);
}

// ✅ GOOD: Return interfaces for flexibility
public interface IProductService
{
    IEnumerable<Product> GetAllProducts(); // More flexible than List<Product>
}

// Implementation
public class ProductService : IProductService
{
    public IEnumerable<Product> GetAllProducts()
    {
        return _products; // Can return List, Array, or any IEnumerable
    }
}

// ✅ GOOD: Document interface purpose
/// <summary>
/// Service for managing product operations
/// </summary>
public interface IProductService
{
    /// <summary>
    /// Retrieves all products from the database
    /// </summary>
    List<Product> GetAllProducts();
}

// ❌ BAD: Interface with implementation
public interface IProductService
{
    List<Product> GetAllProducts()
    {
        // Interfaces cannot have implementation (before C# 8)
        return new List<Product>();
    }
}`,
              language: 'csharp',
              explanation: 'Prefix interfaces with "I". Use async methods when appropriate. Return interfaces (IEnumerable) for flexibility. Document interface purpose. Interfaces define contracts, not implementations.'
            }
          ],
          comparison: {
            title: 'Interface vs Concrete Class',
            options: [
              {
                name: 'Interface',
                description: 'Contract defining what methods must exist',
                whenToUse: 'Dependency injection, multiple implementations, testability (recommended)',
                example: 'builder.Services.AddScoped<IProductService, ProductService>();'
              },
              {
                name: 'Concrete Class',
                description: 'Direct class registration',
                whenToUse: 'Simple apps, single implementation, quick prototypes',
                example: 'builder.Services.AddScoped<ProductService>();'
              },
              {
                name: 'Abstract Class',
                description: 'Base class with some implementation',
                whenToUse: 'Shared implementation across derived classes',
                example: 'public abstract class BaseService { }'
              }
            ]
          }
        },
        {
          id: 'action-result',
          title: 'IActionResult & ActionResult<T>',
          description: 'Using ActionResult types for better HTTP response control',
          keyPoints: [
            'IActionResult provides full control over HTTP responses',
            'ActionResult<T> combines type safety with flexibility',
            'Return specific status codes (200, 404, 400, 201, etc.)',
            'Use helper methods: Ok(), NotFound(), BadRequest(), Created()',
            'ActionResult<T> is recommended for most API endpoints'
          ],
          codeExamples: [
            {
              title: 'Basic IActionResult Usage',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // Return IActionResult for full control
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            return NotFound(); // 404 Not Found
        }

        return Ok(product); // 200 OK with product data
    }

    // Return different status codes
    [HttpPost]
    public IActionResult Create(Product product)
    {
        if (string.IsNullOrEmpty(product.Name))
        {
            return BadRequest("Product name is required"); // 400 Bad Request
        }

        var created = _productService.CreateProduct(product);
        
        return CreatedAtAction(
            nameof(GetById), 
            new { id = created.Id }, 
            created
        ); // 201 Created with location header
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deleted = _productService.DeleteProduct(id);

        if (!deleted)
        {
            return NotFound(); // 404 Not Found
        }

        return NoContent(); // 204 No Content
    }
}`,
              language: 'csharp',
              explanation: 'IActionResult allows returning different HTTP status codes. Use Ok() for 200, NotFound() for 404, BadRequest() for 400. CreatedAtAction() returns 201 with location. NoContent() returns 204.'
            },
            {
              title: 'ActionResult<T> - Type Safe Returns',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // ActionResult<T> provides type safety
    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _productService.GetProductById(id);

        if (product == null)
        {
            return NotFound(); // Still return status codes
        }

        return product; // Can return object directly (implicit Ok())
        // OR
        // return Ok(product); // Explicit Ok()
    }

    // Return list with ActionResult
    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        var products = _productService.GetAllProducts();
        return products; // Implicit Ok(products)
    }

    // Create with ActionResult<T>
    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        if (string.IsNullOrEmpty(product.Name))
        {
            return BadRequest("Name required");
        }

        var created = _productService.CreateProduct(product);
        
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }
}

// Benefits of ActionResult<T>:
// 1. Type safety - Swagger knows return type
// 2. Can return object directly or status codes
// 3. Better API documentation
// 4. IntelliSense support`,
              language: 'csharp',
              explanation: 'ActionResult<T> combines type safety with flexibility. Return object directly (implicit Ok) or use status code methods. Swagger generates better documentation. Recommended for most endpoints.'
            },
            {
              title: 'Common Status Code Methods',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // 200 OK - Success with data
    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _productService.GetProductById(id);
        return Ok(product); // 200 OK
    }

    // 201 Created - Resource created successfully
    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        var created = _productService.CreateProduct(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created); // 201
    }

    // 204 No Content - Success with no data
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _productService.DeleteProduct(id);
        return NoContent(); // 204
    }

    // 400 Bad Request - Invalid input
    [HttpPost("validate")]
    public ActionResult<Product> CreateWithValidation(Product product)
    {
        if (product.Price < 0)
        {
            return BadRequest("Price cannot be negative"); // 400
        }
        
        return Ok(product);
    }

    // 404 Not Found - Resource doesn't exist
    [HttpGet("search/{id}")]
    public ActionResult<Product> Search(int id)
    {
        var product = _productService.GetProductById(id);
        
        if (product == null)
        {
            return NotFound($"Product {id} not found"); // 404
        }
        
        return product;
    }

    // 409 Conflict - Resource conflict
    [HttpPost("unique")]
    public ActionResult<Product> CreateUnique(Product product)
    {
        var exists = _productService.GetAllProducts()
            .Any(p => p.Name == product.Name);
        
        if (exists)
        {
            return Conflict("Product with this name already exists"); // 409
        }
        
        return Ok(product);
    }

    // 500 Internal Server Error - Handled by middleware
    // Don't return this manually, let exceptions be caught
}`,
              language: 'csharp',
              explanation: 'Use appropriate status codes: Ok(200) for success, Created(201) for new resources, NoContent(204) for delete, BadRequest(400) for validation, NotFound(404) for missing, Conflict(409) for duplicates.'
            },
            {
              title: 'Validation with ActionResult',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        // Manual validation
        if (product == null)
        {
            return BadRequest("Product cannot be null");
        }

        if (string.IsNullOrEmpty(product.Name))
        {
            return BadRequest("Product name is required");
        }

        if (product.Price <= 0)
        {
            return BadRequest("Price must be greater than 0");
        }

        if (product.Name.Length > 100)
        {
            return BadRequest("Name cannot exceed 100 characters");
        }

        // All validation passed
        var created = _productService.CreateProduct(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    // Using ModelState (automatic with [ApiController])
    [HttpPost("auto")]
    public ActionResult<Product> CreateAuto(Product product)
    {
        // [ApiController] automatically validates and returns 400
        // if model is invalid (based on data annotations)
        
        var created = _productService.CreateProduct(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    // Custom validation response
    [HttpPost("custom")]
    public ActionResult<Product> CreateCustom(Product product)
    {
        if (!ModelState.IsValid)
        {
            var errors = ModelState.Values
                .SelectMany(v => v.Errors)
                .Select(e => e.ErrorMessage);
            
            return BadRequest(new { errors });
        }

        var created = _productService.CreateProduct(product);
        return Ok(created);
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _productService.GetProductById(id);
        return product == null ? NotFound() : Ok(product);
    }
}`,
              language: 'csharp',
              explanation: 'Validate input and return BadRequest(400) for invalid data. [ApiController] provides automatic validation. Check ModelState for validation errors. Return appropriate error messages to client.'
            },
            {
              title: 'ActionResult Best Practices',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // ✅ GOOD: Use ActionResult<T> for type safety
    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _productService.GetProductById(id);
        return product == null ? NotFound() : Ok(product);
    }

    // ✅ GOOD: Return appropriate status codes
    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        var created = _productService.CreateProduct(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    // ✅ GOOD: Include error messages
    [HttpPut("{id}")]
    public ActionResult<Product> Update(int id, Product product)
    {
        var existing = _productService.GetProductById(id);
        
        if (existing == null)
        {
            return NotFound($"Product with ID {id} not found");
        }

        var updated = _productService.UpdateProduct(id, product);
        return Ok(updated);
    }

    // ✅ GOOD: Consistent return types
    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        return Ok(_productService.GetAllProducts());
    }

    // ❌ BAD: Mixing return types
    [HttpGet("bad")]
    public IActionResult GetAllBad()
    {
        // Sometimes returns Ok(list), sometimes returns list directly
        var products = _productService.GetAllProducts();
        return Ok(products); // Should be consistent
    }

    // ✅ GOOD: Use NoContent for successful deletes
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deleted = _productService.DeleteProduct(id);
        return deleted ? NoContent() : NotFound();
    }
}

// Best practices:
// 1. Use ActionResult<T> for most endpoints
// 2. Return appropriate status codes
// 3. Include helpful error messages
// 4. Be consistent across endpoints
// 5. Use CreatedAtAction for POST
// 6. Use NoContent for DELETE`,
              language: 'csharp',
              explanation: 'Use ActionResult<T> for type safety. Return appropriate status codes for each operation. Include helpful error messages. Be consistent. Use CreatedAtAction for POST, NoContent for DELETE.'
            }
          ],
          comparison: {
            title: 'Return Type Options',
            options: [
              {
                name: 'Specific Type (Product)',
                description: 'Return data type directly',
                whenToUse: 'Simple cases, no error handling needed',
                example: 'public Product GetById(int id) { return product; }'
              },
              {
                name: 'IActionResult',
                description: 'Full control, no type safety',
                whenToUse: 'Need flexibility, return different types',
                example: 'public IActionResult Get() { return Ok(product); }'
              },
              {
                name: 'ActionResult<T>',
                description: 'Type safe with status code control',
                whenToUse: 'Most API endpoints (recommended)',
                example: 'public ActionResult<Product> Get() { return Ok(product); }'
              }
            ]
          }
        },
        {
          id: 'dbcontext',
          title: 'DbContext & Entity Framework Core',
          description: 'Using EF Core DbContext to interact with databases',
          keyPoints: [
            'DbContext represents a session with the database',
            'DbSet<T> properties represent tables',
            'EF Core translates LINQ queries to SQL',
            'Use async methods for better performance',
            'DbContext is registered as Scoped service'
          ],
          codeExamples: [
            {
              title: 'Creating a DbContext',
              code: `// Install NuGet packages:
// Microsoft.EntityFrameworkCore
// Microsoft.EntityFrameworkCore.SqlServer
// Microsoft.EntityFrameworkCore.Tools

// Models/Product.cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; }
}

// Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) 
        : base(options)
    {
    }

    // DbSet represents a table
    public DbSet<Product> Products { get; set; }
}

// Program.cs - Register DbContext
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Register DbContext with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();
app.MapControllers();
app.Run();

// appsettings.json - Connection string
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=MyApiDb;Trusted_Connection=true"
  }
}`,
              language: 'csharp',
              explanation: 'DbContext inherits from DbContext base class. DbSet<Product> represents Products table. Register with AddDbContext in Program.cs. Connection string in appsettings.json. Constructor receives DbContextOptions.'
            },
            {
              title: 'Using DbContext in Service',
              code: `// Services/ProductService.cs
public class ProductService : IProductService
{
    private readonly AppDbContext _context;

    public ProductService(AppDbContext context)
    {
        _context = context;
    }

    // READ - Get all
    public async Task<List<Product>> GetAllProductsAsync()
    {
        return await _context.Products.ToListAsync();
    }

    // READ - Get by ID
    public async Task<Product> GetProductByIdAsync(int id)
    {
        return await _context.Products.FindAsync(id);
    }

    // CREATE
    public async Task<Product> CreateProductAsync(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return product;
    }

    // UPDATE
    public async Task<Product> UpdateProductAsync(int id, Product product)
    {
        var existing = await _context.Products.FindAsync(id);
        
        if (existing != null)
        {
            existing.Name = product.Name;
            existing.Price = product.Price;
            existing.Category = product.Category;
            
            await _context.SaveChangesAsync();
        }
        
        return existing;
    }

    // DELETE
    public async Task<bool> DeleteProductAsync(int id)
    {
        var product = await _context.Products.FindAsync(id);
        
        if (product != null)
        {
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }
        
        return false;
    }
}

// Program.cs - Register service
builder.Services.AddScoped<IProductService, ProductService>();`,
              language: 'csharp',
              explanation: 'Inject DbContext into service constructor. Use async methods (ToListAsync, FindAsync, SaveChangesAsync). Add() adds entity, Remove() deletes. SaveChangesAsync() commits to database. FindAsync() finds by primary key.'
            },
            {
              title: 'LINQ Queries with DbContext',
              code: `public class ProductService : IProductService
{
    private readonly AppDbContext _context;

    public ProductService(AppDbContext context)
    {
        _context = context;
    }

    // Filter products
    public async Task<List<Product>> GetProductsByCategoryAsync(string category)
    {
        return await _context.Products
            .Where(p => p.Category == category)
            .ToListAsync();
    }

    // Search products
    public async Task<List<Product>> SearchProductsAsync(string searchTerm)
    {
        return await _context.Products
            .Where(p => p.Name.Contains(searchTerm))
            .ToListAsync();
    }

    // Filter by price range
    public async Task<List<Product>> GetProductsByPriceRangeAsync(decimal min, decimal max)
    {
        return await _context.Products
            .Where(p => p.Price >= min && p.Price <= max)
            .OrderBy(p => p.Price)
            .ToListAsync();
    }

    // Get expensive products
    public async Task<List<Product>> GetExpensiveProductsAsync()
    {
        return await _context.Products
            .Where(p => p.Price > 500)
            .OrderByDescending(p => p.Price)
            .Take(10)
            .ToListAsync();
    }

    // Count products
    public async Task<int> GetProductCountAsync()
    {
        return await _context.Products.CountAsync();
    }

    // Check if exists
    public async Task<bool> ProductExistsAsync(int id)
    {
        return await _context.Products.AnyAsync(p => p.Id == id);
    }

    // Get first or default
    public async Task<Product> GetFirstProductAsync()
    {
        return await _context.Products.FirstOrDefaultAsync();
    }
}

// EF Core translates LINQ to SQL:
// Where() -> WHERE clause
// OrderBy() -> ORDER BY
// Take() -> TOP
// Count() -> COUNT(*)
// Any() -> EXISTS`,
              language: 'csharp',
              explanation: 'Use LINQ methods on DbSet: Where() filters, OrderBy() sorts, Take() limits results. ToListAsync() executes query. CountAsync() counts records. AnyAsync() checks existence. EF Core translates to SQL.'
            },
            {
              title: 'Controller with DbContext Service',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll()
    {
        var products = await _productService.GetAllProductsAsync();
        return Ok(products);
    }

    // GET: api/products/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var product = await _productService.GetProductByIdAsync(id);
        
        if (product == null)
        {
            return NotFound();
        }
        
        return Ok(product);
    }

    // GET: api/products/category/electronics
    [HttpGet("category/{category}")]
    public async Task<ActionResult<List<Product>>> GetByCategory(string category)
    {
        var products = await _productService.GetProductsByCategoryAsync(category);
        return Ok(products);
    }

    // POST: api/products
    [HttpPost]
    public async Task<ActionResult<Product>> Create(Product product)
    {
        var created = await _productService.CreateProductAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    // PUT: api/products/5
    [HttpPut("{id}")]
    public async Task<ActionResult<Product>> Update(int id, Product product)
    {
        var updated = await _productService.UpdateProductAsync(id, product);
        
        if (updated == null)
        {
            return NotFound();
        }
        
        return Ok(updated);
    }

    // DELETE: api/products/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _productService.DeleteProductAsync(id);
        
        if (!deleted)
        {
            return NotFound();
        }
        
        return NoContent();
    }
}`,
              language: 'csharp',
              explanation: 'Controller methods are async (async Task<ActionResult<T>>). Await service methods. Use ActionResult for status codes. Return Ok(), NotFound(), CreatedAtAction(), NoContent(). All database operations are async.'
            },
            {
              title: 'DbContext Best Practices',
              code: `// ✅ GOOD: Use async methods
public async Task<List<Product>> GetAllProductsAsync()
{
    return await _context.Products.ToListAsync();
}

// ❌ BAD: Synchronous methods (blocks thread)
public List<Product> GetAllProducts()
{
    return _context.Products.ToList(); // Don't do this
}

// ✅ GOOD: Use FindAsync for primary key lookups
public async Task<Product> GetProductByIdAsync(int id)
{
    return await _context.Products.FindAsync(id);
}

// ✅ GOOD: Use FirstOrDefaultAsync for queries
public async Task<Product> GetProductByNameAsync(string name)
{
    return await _context.Products
        .FirstOrDefaultAsync(p => p.Name == name);
}

// ✅ GOOD: Don't track entities for read-only queries
public async Task<List<Product>> GetAllProductsReadOnlyAsync()
{
    return await _context.Products
        .AsNoTracking() // Better performance for read-only
        .ToListAsync();
}

// ✅ GOOD: SaveChangesAsync after modifications
public async Task<Product> CreateProductAsync(Product product)
{
    _context.Products.Add(product);
    await _context.SaveChangesAsync(); // Commit to database
    return product;
}

// ❌ BAD: Forgetting SaveChangesAsync
public async Task<Product> CreateProductBad(Product product)
{
    _context.Products.Add(product);
    // Missing SaveChangesAsync - changes not saved!
    return product;
}

// ✅ GOOD: DbContext is scoped - don't store it
// DbContext is created per request and disposed automatically

// ❌ BAD: Storing DbContext in static field
public static AppDbContext _staticContext; // Don't do this!`,
              language: 'csharp',
              explanation: 'Always use async methods (ToListAsync, SaveChangesAsync). Use FindAsync for primary keys. Use AsNoTracking() for read-only queries. Always call SaveChangesAsync after modifications. DbContext is scoped per request.'
            }
          ],
          comparison: {
            title: 'Data Access Approaches',
            options: [
              {
                name: 'In-Memory List',
                description: 'Store data in List<T> in service',
                whenToUse: 'Learning, prototyping, testing',
                example: 'private List<Product> _products = new();'
              },
              {
                name: 'Entity Framework Core',
                description: 'ORM with DbContext and LINQ',
                whenToUse: 'Production apps, relational databases (recommended)',
                example: 'await _context.Products.ToListAsync();'
              },
              {
                name: 'Dapper (Micro-ORM)',
                description: 'Lightweight ORM with SQL queries',
                whenToUse: 'Performance-critical, complex SQL',
                example: 'await connection.QueryAsync<Product>(sql);'
              }
            ]
          }
        },
        {
          id: 'migrations',
          title: 'EF Core Migrations',
          description: 'Managing database schema changes with migrations',
          keyPoints: [
            'Migrations track database schema changes over time',
            'Create migration after changing models',
            'Update database to apply migrations',
            'Migrations are version control for your database',
            'Can rollback migrations if needed'
          ],
          codeExamples: [
            {
              title: 'Creating Your First Migration',
              code: `// 1. Create DbContext and Models first
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<Product> Products { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// 2. Open terminal in project folder
// 3. Create initial migration
dotnet ef migrations add InitialCreate

// This creates:
// - Migrations folder
// - YYYYMMDDHHMMSS_InitialCreate.cs (migration file)
// - AppDbContextModelSnapshot.cs (current schema)

// 4. Apply migration to database
dotnet ef database update

// Database is now created with Products table

// Migration file example (auto-generated):
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
                Name = table.Column<string>(nullable: true),
                Price = table.Column<decimal>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Products", x => x.Id);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "Products");
    }
}`,
              language: 'csharp',
              explanation: 'Create migration with "dotnet ef migrations add [Name]". Apply with "dotnet ef database update". Migration creates Up() (apply changes) and Down() (rollback). EF Core generates SQL automatically.'
            },
            {
              title: 'Adding New Properties',
              code: `// 1. Update your model
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    
    // NEW: Add Category property
    public string Category { get; set; }
    
    // NEW: Add Stock property
    public int Stock { get; set; }
}

// 2. Create migration for changes
dotnet ef migrations add AddCategoryAndStock

// 3. Review generated migration
public partial class AddCategoryAndStock : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>(
            name: "Category",
            table: "Products",
            nullable: true);

        migrationBuilder.AddColumn<int>(
            name: "Stock",
            table: "Products",
            nullable: false,
            defaultValue: 0);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn(name: "Category", table: "Products");
        migrationBuilder.DropColumn(name: "Stock", table: "Products");
    }
}

// 4. Apply migration
dotnet ef database update

// Database now has Category and Stock columns

// 5. Use new properties in code
var product = new Product
{
    Name = "Laptop",
    Price = 999.99m,
    Category = "Electronics", // NEW
    Stock = 10                // NEW
};`,
              language: 'csharp',
              explanation: 'Add properties to model, create migration, apply to database. EF Core detects changes and generates ALTER TABLE statements. Down() method allows rollback. Always review migration before applying.'
            },
            {
              title: 'Common Migration Commands',
              code: `// Create a new migration
dotnet ef migrations add MigrationName

// Apply all pending migrations
dotnet ef database update

// Rollback to specific migration
dotnet ef database update PreviousMigrationName

// Rollback all migrations (empty database)
dotnet ef database update 0

// Remove last migration (if not applied)
dotnet ef migrations remove

// List all migrations
dotnet ef migrations list

// Generate SQL script from migrations
dotnet ef migrations script

// Generate SQL for specific migration range
dotnet ef migrations script FromMigration ToMigration

// Drop database
dotnet ef database drop

// View migration details
dotnet ef migrations script --output migration.sql

// Common workflow:
// 1. Change model
// 2. dotnet ef migrations add DescriptiveName
// 3. Review generated migration
// 4. dotnet ef database update
// 5. Test changes

// Example: Adding new table
// 1. Add new DbSet to DbContext
public DbSet<Order> Orders { get; set; }

// 2. Create model
public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public decimal Total { get; set; }
}

// 3. Create migration
dotnet ef migrations add AddOrdersTable

// 4. Apply
dotnet ef database update`,
              language: 'csharp',
              explanation: 'Key commands: add (create migration), update (apply), remove (delete last), list (show all). Can rollback with update [MigrationName]. Generate SQL scripts. Drop database for fresh start.'
            },
            {
              title: 'Seeding Data with Migrations',
              code: `// Data/AppDbContext.cs
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed initial data
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Laptop", Price = 999.99m, Category = "Electronics" },
            new Product { Id = 2, Name = "Mouse", Price = 29.99m, Category = "Electronics" },
            new Product { Id = 3, Name = "Desk", Price = 299.99m, Category = "Furniture" }
        );
    }
}

// Create migration with seed data
dotnet ef migrations add SeedProducts

// Generated migration includes INSERT statements
public partial class SeedProducts : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.InsertData(
            table: "Products",
            columns: new[] { "Id", "Name", "Price", "Category" },
            values: new object[] { 1, "Laptop", 999.99m, "Electronics" });

        migrationBuilder.InsertData(
            table: "Products",
            columns: new[] { "Id", "Name", "Price", "Category" },
            values: new object[] { 2, "Mouse", 29.99m, "Electronics" });

        migrationBuilder.InsertData(
            table: "Products",
            columns: new[] { "Id", "Name", "Price", "Category" },
            values: new object[] { 3, "Desk", 299.99m, "Furniture" });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DeleteData(table: "Products", keyColumn: "Id", keyValue: 1);
        migrationBuilder.DeleteData(table: "Products", keyColumn: "Id", keyValue: 2);
        migrationBuilder.DeleteData(table: "Products", keyColumn: "Id", keyValue: 3);
    }
}

// Apply migration
dotnet ef database update

// Database now has initial products`,
              language: 'csharp',
              explanation: 'Use HasData() in OnModelCreating to seed initial data. Create migration to generate INSERT statements. Useful for lookup tables, test data, initial configuration. Data persists across migrations.'
            },
            {
              title: 'Migration Best Practices',
              code: `// ✅ GOOD: Descriptive migration names
dotnet ef migrations add AddProductCategoryAndStock
dotnet ef migrations add CreateOrdersTable
dotnet ef migrations add AddUserEmailIndex

// ❌ BAD: Vague names
dotnet ef migrations add Update1
dotnet ef migrations add Changes
dotnet ef migrations add Fix

// ✅ GOOD: Review migration before applying
dotnet ef migrations add AddCategory
// Open generated file, review SQL
dotnet ef database update

// ✅ GOOD: Test migrations in development first
// 1. Create migration
// 2. Apply to dev database
// 3. Test application
// 4. Commit migration to source control
// 5. Apply to production

// ✅ GOOD: Keep migrations small and focused
// One migration per logical change
dotnet ef migrations add AddCategory
dotnet ef migrations add AddStock
// Better than one huge migration

// ✅ GOOD: Never modify applied migrations
// If migration is applied, create new migration to fix
// Don't edit existing migration files

// ✅ GOOD: Include migrations in source control
// Commit Migrations folder to Git
// Team members can apply same migrations

// ❌ BAD: Deleting migrations folder
// Migrations are history - keep them

// ✅ GOOD: Use meaningful default values
migrationBuilder.AddColumn<int>(
    name: "Stock",
    table: "Products",
    nullable: false,
    defaultValue: 0); // Existing rows get 0

// ✅ GOOD: Handle data migration if needed
protected override void Up(MigrationBuilder migrationBuilder)
{
    // Add column
    migrationBuilder.AddColumn<string>(
        name: "Category",
        table: "Products",
        nullable: true);
    
    // Update existing data
    migrationBuilder.Sql(
        "UPDATE Products SET Category = 'Uncategorized' WHERE Category IS NULL");
}`,
              language: 'csharp',
              explanation: 'Use descriptive names. Review before applying. Test in dev first. Keep migrations small. Never modify applied migrations. Include in source control. Use default values. Handle data migration when needed.'
            }
          ],
          comparison: {
            title: 'Database Update Approaches',
            options: [
              {
                name: 'Migrations (Code First)',
                description: 'Define models in code, generate database',
                whenToUse: 'New projects, full control over schema (recommended)',
                example: 'dotnet ef migrations add InitialCreate'
              },
              {
                name: 'Database First',
                description: 'Existing database, generate models',
                whenToUse: 'Legacy databases, existing schema',
                example: 'dotnet ef dbcontext scaffold'
              },
              {
                name: 'Manual SQL Scripts',
                description: 'Write SQL directly',
                whenToUse: 'Complex migrations, specific SQL needs',
                example: 'ALTER TABLE Products ADD Category VARCHAR(50)'
              }
            ]
          }
        },
        {
          id: 'cors',
          title: 'CORS Policy',
          description: 'Configuring Cross-Origin Resource Sharing for API access',
          keyPoints: [
            'CORS allows browsers to make requests to different domains',
            'Required when frontend and API are on different origins',
            'Configure allowed origins, methods, and headers',
            'Use specific origins in production, not AllowAnyOrigin',
            'Add CORS middleware before UseAuthorization'
          ],
          codeExamples: [
            {
              title: 'Basic CORS Configuration',
              code: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Add CORS service
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()   // Allow any domain
              .AllowAnyMethod()   // Allow GET, POST, PUT, DELETE, etc.
              .AllowAnyHeader();  // Allow any headers
    });
});

var app = builder.Build();

// Use CORS middleware (BEFORE UseAuthorization!)
app.UseCors("AllowAll");

app.UseAuthorization();
app.MapControllers();

app.Run();

// Now API can be called from any origin
// Example: React app on localhost:3000 can call API on localhost:5000`,
              language: 'csharp',
              explanation: 'Add CORS with AddCors() in services. Create policy with AllowAnyOrigin/Method/Header. Apply with UseCors() middleware. Must be before UseAuthorization(). Policy name is "AllowAll".'
            },
            {
              title: 'Specific Origins (Production)',
              code: `// Program.cs - Production configuration
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// CORS with specific origins
builder.Services.AddCors(options =>
{
    options.AddPolicy("ProductionPolicy", policy =>
    {
        policy.WithOrigins(
                "https://myapp.com",           // Production frontend
                "https://www.myapp.com",       // WWW version
                "https://admin.myapp.com"      // Admin panel
            )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials(); // Allow cookies/auth headers
    });
});

var app = builder.Build();

app.UseCors("ProductionPolicy");
app.UseAuthorization();
app.MapControllers();

app.Run();

// Only specified origins can access API
// More secure than AllowAnyOrigin
// AllowCredentials requires specific origins (can't use with AllowAnyOrigin)`,
              language: 'csharp',
              explanation: 'Use WithOrigins() for specific domains in production. List all allowed origins. AllowCredentials() enables cookies/auth. More secure than AllowAnyOrigin. Cannot use AllowCredentials with AllowAnyOrigin.'
            },
            {
              title: 'Development vs Production CORS',
              code: `// Program.cs - Environment-specific CORS
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Different CORS for dev and production
builder.Services.AddCors(options =>
{
    if (builder.Environment.IsDevelopment())
    {
        // Development: Allow localhost
        options.AddPolicy("DevPolicy", policy =>
        {
            policy.WithOrigins(
                    "http://localhost:3000",    // React dev server
                    "http://localhost:4200",    // Angular dev server
                    "http://localhost:5173"     // Vite dev server
                )
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        });
    }
    else
    {
        // Production: Specific domains only
        options.AddPolicy("ProdPolicy", policy =>
        {
            policy.WithOrigins(
                    "https://myapp.com",
                    "https://www.myapp.com"
                )
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        });
    }
});

var app = builder.Build();

// Use appropriate policy
var corsPolicy = app.Environment.IsDevelopment() ? "DevPolicy" : "ProdPolicy";
app.UseCors(corsPolicy);

app.UseAuthorization();
app.MapControllers();

app.Run();`,
              language: 'csharp',
              explanation: 'Use different CORS policies for development and production. Development allows localhost ports. Production uses actual domain names. Check environment with IsDevelopment(). Apply correct policy based on environment.'
            },
            {
              title: 'CORS from Configuration',
              code: `// appsettings.json
{
  "Cors": {
    "AllowedOrigins": [
      "https://myapp.com",
      "https://www.myapp.com",
      "https://admin.myapp.com"
    ]
  }
}

// appsettings.Development.json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "http://localhost:4200",
      "http://localhost:5173"
    ]
  }
}

// Program.cs - Read from configuration
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Get allowed origins from config
var allowedOrigins = builder.Configuration
    .GetSection("Cors:AllowedOrigins")
    .Get<string[]>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ConfigPolicy", policy =>
    {
        policy.WithOrigins(allowedOrigins)
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseCors("ConfigPolicy");
app.UseAuthorization();
app.MapControllers();

app.Run();

// Benefits:
// - Change origins without recompiling
// - Different settings per environment
// - Easier to manage multiple origins`,
              language: 'csharp',
              explanation: 'Store allowed origins in appsettings.json. Read with GetSection().Get<string[]>(). Different origins per environment file. Change without recompiling. Easier to manage.'
            },
            {
              title: 'CORS Best Practices',
              code: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// ✅ GOOD: Specific origins in production
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", policy =>
    {
        policy.WithOrigins("https://myapp.com")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

// ❌ BAD: AllowAnyOrigin in production
builder.Services.AddCors(options =>
{
    options.AddPolicy("BadPolicy", policy =>
    {
        policy.AllowAnyOrigin() // Security risk!
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

// ✅ GOOD: UseCors BEFORE UseAuthorization
app.UseCors("MyPolicy");
app.UseAuthorization();
app.MapControllers();

// ❌ BAD: UseCors AFTER UseAuthorization
// app.UseAuthorization();
// app.UseCors("MyPolicy"); // Won't work correctly!

app.Run();

// ✅ GOOD: Specific methods if needed
builder.Services.AddCors(options =>
{
    options.AddPolicy("RestrictedPolicy", policy =>
    {
        policy.WithOrigins("https://myapp.com")
            .WithMethods("GET", "POST") // Only allow GET and POST
            .AllowAnyHeader();
    });
});

// ✅ GOOD: Specific headers if needed
builder.Services.AddCors(options =>
{
    options.AddPolicy("HeaderPolicy", policy =>
    {
        policy.WithOrigins("https://myapp.com")
            .AllowAnyMethod()
            .WithHeaders("Content-Type", "Authorization"); // Only these headers
    });
});

// Best practices:
// 1. Use specific origins in production
// 2. UseCors before UseAuthorization
// 3. Use AllowCredentials for auth
// 4. Store origins in configuration
// 5. Different policies for dev/prod
// 6. Restrict methods/headers if possible`,
              language: 'csharp',
              explanation: 'Use specific origins in production, not AllowAnyOrigin. Place UseCors before UseAuthorization. Use AllowCredentials for authentication. Store in config. Different policies per environment. Restrict methods/headers when possible.'
            }
          ],
          comparison: {
            title: 'CORS Configuration Levels',
            options: [
              {
                name: 'AllowAnyOrigin',
                description: 'Allow all domains (wildcard)',
                whenToUse: 'Development only, public APIs',
                example: 'policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();'
              },
              {
                name: 'WithOrigins',
                description: 'Specific allowed domains',
                whenToUse: 'Production, controlled access (recommended)',
                example: 'policy.WithOrigins("https://myapp.com").AllowCredentials();'
              },
              {
                name: 'Per-Controller CORS',
                description: 'Apply CORS to specific controllers',
                whenToUse: 'Different policies for different endpoints',
                example: '[EnableCors("PolicyName")] on controller'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-2-week-3',
      weekNumber: 3,
      title: 'JavaScript Array Methods',
      description: 'Essential array methods for data manipulation in JavaScript',
      concepts: [
        {
          id: 'map-method',
          title: 'map() Method',
          description: 'Transform each element in an array and return a new array',
          keyPoints: [
            'map() creates a new array by transforming each element',
            'Original array is not modified (immutable)',
            'Returns array of same length as original',
            'Callback receives element, index, and array',
            'Use for transforming data, not side effects'
          ],
          codeExamples: [
            {
              title: 'Basic map() Usage',
              code: `// Double each number
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged

// Arrow function syntax (shorter)
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// Square each number
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Convert to strings
const strings = numbers.map(num => "Number: " + num);
console.log(strings); 
// ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]`,
              language: 'javascript',
              explanation: 'map() takes a callback function and applies it to each element. Returns new array with transformed values. Original array stays unchanged. Arrow functions provide shorter syntax.'
            },
            {
              title: 'map() with Objects',
              code: `// Array of product objects
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 29 },
  { id: 3, name: "Keyboard", price: 79 }
];

// Extract just the names
const names = products.map(product => product.name);
console.log(names); // ["Laptop", "Mouse", "Keyboard"]

// Extract just the prices
const prices = products.map(product => product.price);
console.log(prices); // [999, 29, 79]

// Add discount price to each product
const withDiscount = products.map(product => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    discountPrice: product.price * 0.9
  };
});
console.log(withDiscount);
// [
//   { id: 1, name: "Laptop", price: 999, discountPrice: 899.1 },
//   { id: 2, name: "Mouse", price: 29, discountPrice: 26.1 },
//   { id: 3, name: "Keyboard", price: 79, discountPrice: 71.1 }
// ]

// Format for display
const formatted = products.map(p => p.name + " - $" + p.price);
console.log(formatted);
// ["Laptop - $999", "Mouse - $29", "Keyboard - $79"]`,
              language: 'javascript',
              explanation: 'Use map() to extract properties from objects, transform object structures, or format data. Access object properties with dot notation. Can return new objects with additional properties.'
            },
            {
              title: 'map() with Index',
              code: `const letters = ["a", "b", "c", "d"];

// Callback receives element, index, and array
const withIndex = letters.map(function(letter, index) {
  return index + ": " + letter;
});
console.log(withIndex); // ["0: a", "1: b", "2: c", "3: d"]

// Create numbered list
const numbered = letters.map((letter, i) => (i + 1) + ". " + letter);
console.log(numbered); // ["1. a", "2. b", "3. c", "4. d"]

// Use index for calculations
const numbers = [10, 20, 30, 40];
const multiplied = numbers.map((num, index) => num * index);
console.log(multiplied); // [0, 20, 60, 120]

// Add position to objects
const users = ["Alice", "Bob", "Charlie"];
const usersWithPosition = users.map((name, index) => {
  return {
    position: index + 1,
    name: name
  };
});
console.log(usersWithPosition);
// [
//   { position: 1, name: "Alice" },
//   { position: 2, name: "Bob" },
//   { position: 3, name: "Charlie" }
// ]`,
              language: 'javascript',
              explanation: 'map() callback receives three parameters: element, index, and the full array. Index is useful for numbering, positioning, or calculations based on position. Index starts at 0.'
            },
            {
              title: 'Practical map() Examples',
              code: `// Convert Celsius to Fahrenheit
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // [32, 50, 68, 86, 104]

// Parse strings to numbers
const stringNumbers = ["1", "2", "3", "4", "5"];
const parsed = stringNumbers.map(str => parseInt(str));
console.log(parsed); // [1, 2, 3, 4, 5]

// Or using Number
const parsed2 = stringNumbers.map(Number);
console.log(parsed2); // [1, 2, 3, 4, 5]

// Uppercase all strings
const words = ["hello", "world", "javascript"];
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase); // ["HELLO", "WORLD", "JAVASCRIPT"]

// Get string lengths
const lengths = words.map(word => word.length);
console.log(lengths); // [5, 5, 10]

// Create HTML list items
const items = ["Apple", "Banana", "Orange"];
const listItems = items.map(item => "<li>" + item + "</li>");
console.log(listItems);
// ["<li>Apple</li>", "<li>Banana</li>", "<li>Orange</li>"]`,
              language: 'javascript',
              explanation: 'map() is versatile for data transformation: temperature conversion, parsing strings, changing case, calculating lengths, formatting for display. Always returns new array.'
            }
          ],
          comparison: {
            title: 'When to Use map()',
            options: [
              {
                name: 'map()',
                description: 'Transform each element, return new array',
                whenToUse: 'Converting data, extracting properties, formatting',
                example: 'numbers.map(n => n * 2)'
              },
              {
                name: 'forEach()',
                description: 'Execute function for each element',
                whenToUse: 'Side effects, no return value needed',
                example: 'numbers.forEach(n => console.log(n))'
              },
              {
                name: 'for loop',
                description: 'Traditional iteration',
                whenToUse: 'Complex logic, need to break early',
                example: 'for (let i = 0; i < arr.length; i++) { }'
              }
            ]
          }
        },
        {
          id: 'filter-method',
          title: 'filter() Method',
          description: 'Create a new array with elements that pass a test',
          keyPoints: [
            'filter() creates new array with elements that pass test',
            'Test function returns true (keep) or false (remove)',
            'Original array is not modified',
            'Returns array that may be shorter than original',
            'Returns empty array if no elements pass'
          ],
          codeExamples: [
            {
              title: 'Basic filter() Usage',
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4, 6, 8, 10]

// Arrow function syntax
const odds = numbers.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5, 7, 9]

// Numbers greater than 5
const greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// Numbers between 3 and 7
const between = numbers.filter(num => num >= 3 && num <= 7);
console.log(between); // [3, 4, 5, 6, 7]

// Original array unchanged
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
              language: 'javascript',
              explanation: 'filter() keeps elements where callback returns true. Use comparison operators (>, <, ===, !==) and logical operators (&&, ||) for conditions. Returns new array.'
            },
            {
              title: 'filter() with Objects',
              code: `const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Mouse", price: 29, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
  { id: 4, name: "Chair", price: 199, category: "Furniture", inStock: true },
  { id: 5, name: "Monitor", price: 399, category: "Electronics", inStock: false }
];

// Get electronics
const electronics = products.filter(p => p.category === "Electronics");
console.log(electronics); // 3 electronics items

// Get in-stock items
const available = products.filter(p => p.inStock);
console.log(available); // 3 in-stock items

// Get items under $100
const affordable = products.filter(p => p.price < 100);
console.log(affordable); // [Mouse]

// Multiple conditions with AND
const affordableElectronics = products.filter(p => {
  return p.category === "Electronics" && p.price < 100;
});
console.log(affordableElectronics); // [Mouse]

// Multiple conditions with OR
const expensiveOrFurniture = products.filter(p => {
  return p.price > 300 || p.category === "Furniture";
});
console.log(expensiveOrFurniture); // 4 items`,
              language: 'javascript',
              explanation: 'filter() with objects checks properties. Use === for exact match. Combine conditions with && (AND) or || (OR). Can use multiple lines in callback for complex logic.'
            },
            {
              title: 'filter() with Strings',
              code: `const words = ["apple", "banana", "apricot", "blueberry", "avocado"];

// Words starting with 'a'
const startsWithA = words.filter(word => word[0] === "a");
console.log(startsWithA); // ["apple", "apricot", "avocado"]

// Words longer than 6 characters
const longWords = words.filter(word => word.length > 6);
console.log(longWords); // ["blueberry", "avocado"]

// Words containing 'berry'
const hasBerry = words.filter(word => word.includes("berry"));
console.log(hasBerry); // ["blueberry"]

// Case-insensitive search
const searchTerm = "APPLE";
const found = words.filter(word => {
  return word.toLowerCase() === searchTerm.toLowerCase();
});
console.log(found); // ["apple"]

// Words NOT starting with 'b'
const notB = words.filter(word => word[0] !== "b");
console.log(notB); // ["apple", "apricot", "avocado"]`,
              language: 'javascript',
              explanation: 'filter() strings using length, includes(), startsWith(), or character access [0]. Use toLowerCase() for case-insensitive comparisons. Use !== for negation (NOT).'
            },
            {
              title: 'Practical filter() Examples',
              code: `// Remove null/undefined values
const mixed = [1, null, 2, undefined, 3, null, 4];
const cleaned = mixed.filter(item => item != null);
console.log(cleaned); // [1, 2, 3, 4]

// Remove empty strings
const strings = ["hello", "", "world", "", "test"];
const nonEmpty = strings.filter(str => str !== "");
console.log(nonEmpty); // ["hello", "world", "test"]

// Or using length
const nonEmpty2 = strings.filter(str => str.length > 0);
console.log(nonEmpty2); // ["hello", "world", "test"]

// Filter unique values (remove duplicates)
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = numbers.filter((num, index, array) => {
  return array.indexOf(num) === index;
});
console.log(unique); // [1, 2, 3, 4, 5]

// Get adults (age >= 18)
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults); // [Alice, Charlie]

// Search functionality
const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const searchTerm = "mo";
const results = products.filter(product => {
  return product.toLowerCase().includes(searchTerm.toLowerCase());
});
console.log(results); // ["Mouse", "Monitor"]`,
              language: 'javascript',
              explanation: 'filter() removes null/undefined, empty strings, duplicates. Use for age checks, search functionality. Callback can receive index and array for advanced filtering like uniqueness.'
            }
          ],
          comparison: {
            title: 'When to Use filter()',
            options: [
              {
                name: 'filter()',
                description: 'Select elements by condition',
                whenToUse: 'Searching, removing items, conditional selection',
                example: 'products.filter(p => p.inStock)'
              },
              {
                name: 'find()',
                description: 'Get first matching element',
                whenToUse: 'Finding single item by ID or condition',
                example: 'products.find(p => p.id === 1)'
              },
              {
                name: 'map()',
                description: 'Transform all elements',
                whenToUse: 'Converting data, not selecting',
                example: 'products.map(p => p.name)'
              }
            ]
          }
        },
        {
          id: 'foreach-method',
          title: 'forEach() Method',
          description: 'Execute a function for each array element',
          keyPoints: [
            'forEach() executes function for each element',
            'Does not return a value (returns undefined)',
            'Cannot break or return early',
            'Use for side effects (logging, DOM updates)',
            'For transforming data, use map() instead'
          ],
          codeExamples: [
            {
              title: 'Basic forEach() Usage',
              code: `const numbers = [1, 2, 3, 4, 5];

// Log each number
numbers.forEach(function(num) {
  console.log(num);
});
// Output: 1, 2, 3, 4, 5 (each on new line)

// Arrow function syntax
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10

// Multiple statements
numbers.forEach(num => {
  const squared = num * num;
  console.log(num + " squared is " + squared);
});
// Output:
// 1 squared is 1
// 2 squared is 4
// 3 squared is 9
// etc.

// forEach returns undefined
const result = numbers.forEach(num => num * 2);
console.log(result); // undefined (not an array!)`,
              language: 'javascript',
              explanation: 'forEach() executes function for each element. Use for side effects like logging or DOM manipulation. Does not return value. Cannot be stopped early.'
            },
            {
              title: 'forEach() with Index',
              code: `const fruits = ["apple", "banana", "orange"];

// Access index
fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});
// Output:
// 0: apple
// 1: banana
// 2: orange

// Use index for numbering
fruits.forEach((fruit, i) => {
  console.log((i + 1) + ". " + fruit);
});
// Output:
// 1. apple
// 2. banana
// 3. orange

// Access full array (third parameter)
const numbers = [10, 20, 30];
numbers.forEach((num, index, array) => {
  console.log("Element " + num + " at index " + index);
  console.log("Array length: " + array.length);
});`,
              language: 'javascript',
              explanation: 'forEach() callback receives element, index, and array. Index useful for numbering or position-based logic. Third parameter gives access to original array.'
            },
            {
              title: 'forEach() for Side Effects',
              code: `// Update external variable
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  sum += num;
});
console.log(sum); // 15

// Build HTML string
let html = "";
const items = ["Apple", "Banana", "Orange"];
items.forEach(item => {
  html += "<li>" + item + "</li>";
});
console.log(html); // <li>Apple</li><li>Banana</li><li>Orange</li>

// Update object properties
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 29 }
];
products.forEach(product => {
  product.discountPrice = product.price * 0.9;
});
console.log(products);
// Each product now has discountPrice property

// Call function for each element
function processItem(item) {
  console.log("Processing: " + item);
  // Do something with item
}
const tasks = ["Task 1", "Task 2", "Task 3"];
tasks.forEach(processItem);`,
              language: 'javascript',
              explanation: 'forEach() ideal for side effects: updating external variables, building strings, modifying objects, calling functions. Use when you need action, not transformation.'
            },
            {
              title: 'forEach() vs map() vs for loop',
              code: `const numbers = [1, 2, 3, 4, 5];

// ❌ BAD: Using forEach when you need new array
const doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2);
});
console.log(doubled); // [2, 4, 6, 8, 10] - works but not ideal

// ✅ GOOD: Use map() for transforming data
const doubled2 = numbers.map(num => num * 2);
console.log(doubled2); // [2, 4, 6, 8, 10] - cleaner!

// ✅ GOOD: forEach for logging/side effects
numbers.forEach(num => {
  console.log("Number: " + num);
});

// ✅ GOOD: for loop when you need to break
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    break; // Can break out of loop
  }
  console.log(numbers[i]);
}
// Output: 1, 2 (stops at 3)

// ❌ BAD: Can't break out of forEach
numbers.forEach(num => {
  if (num === 3) {
    // break; // ERROR! Can't use break
    return; // Only skips current iteration
  }
  console.log(num);
});
// Output: 1, 2, 4, 5 (skips 3 but continues)`,
              language: 'javascript',
              explanation: 'Use map() for transforming data, forEach() for side effects, for loop when you need break/continue. forEach() cannot be stopped early - return only skips current iteration.'
            }
          ],
          comparison: {
            title: 'When to Use forEach()',
            options: [
              {
                name: 'forEach()',
                description: 'Execute function for each element',
                whenToUse: 'Side effects, logging, no return value needed',
                example: 'numbers.forEach(n => console.log(n))'
              },
              {
                name: 'map()',
                description: 'Transform and return new array',
                whenToUse: 'Converting data, need new array',
                example: 'numbers.map(n => n * 2)'
              },
              {
                name: 'for loop',
                description: 'Traditional iteration with control',
                whenToUse: 'Need break/continue, complex logic',
                example: 'for (let i = 0; i < arr.length; i++) { }'
              }
            ]
          }
        },
        {
          id: 'find-method',
          title: 'find() and findIndex() Methods',
          description: 'Find the first element or index that matches a condition',
          keyPoints: [
            'find() returns first element that passes test',
            'findIndex() returns index of first match',
            'Both return undefined/-1 if no match found',
            'Stops searching after first match (efficient)',
            'Use for finding single items, not filtering'
          ],
          codeExamples: [
            {
              title: 'Basic find() Usage',
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find first even number
const firstEven = numbers.find(function(num) {
  return num % 2 === 0;
});
console.log(firstEven); // 2

// Arrow function syntax
const firstOdd = numbers.find(num => num % 2 !== 0);
console.log(firstOdd); // 1

// Find first number greater than 5
const greaterThan5 = numbers.find(num => num > 5);
console.log(greaterThan5); // 6 (stops at first match)

// Returns undefined if not found
const notFound = numbers.find(num => num > 100);
console.log(notFound); // undefined

// Check if found before using
const result = numbers.find(num => num > 7);
if (result !== undefined) {
  console.log("Found: " + result); // Found: 8
} else {
  console.log("Not found");
}`,
              language: 'javascript',
              explanation: 'find() returns first element where callback returns true. Returns undefined if no match. Always check for undefined before using result. Stops after first match for efficiency.'
            },
            {
              title: 'find() with Objects',
              code: `const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

// Find user by ID
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob", age: 30 }

// Find user by name
const alice = users.find(u => u.name === "Alice");
console.log(alice); // { id: 1, name: "Alice", age: 25 }

// Find first user over 30
const over30 = users.find(u => u.age > 30);
console.log(over30); // { id: 3, name: "Charlie", age: 35 }

// Not found returns undefined
const notFound = users.find(u => u.id === 999);
console.log(notFound); // undefined

// Safe usage with check
const userId = 2;
const foundUser = users.find(u => u.id === userId);
if (foundUser) {
  console.log("User name: " + foundUser.name);
} else {
  console.log("User not found");
}

// Products example
const products = [
  { id: 101, name: "Laptop", price: 999 },
  { id: 102, name: "Mouse", price: 29 },
  { id: 103, name: "Keyboard", price: 79 }
];

const product = products.find(p => p.id === 102);
console.log(product.name); // "Mouse"`,
              language: 'javascript',
              explanation: 'find() with objects searches by property values. Use === for exact match. Returns full object or undefined. Always check if result exists before accessing properties.'
            },
            {
              title: 'findIndex() Method',
              code: `const numbers = [10, 20, 30, 40, 50];

// Find index of first number > 25
const index = numbers.findIndex(num => num > 25);
console.log(index); // 2 (index of 30)

// Returns -1 if not found
const notFound = numbers.findIndex(num => num > 100);
console.log(notFound); // -1

// Find index of even number
const evenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenIndex); // 0 (first element is even)

// Use index to access or modify element
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

const inactiveIndex = users.findIndex(u => !u.active);
console.log(inactiveIndex); // 1

// Use index to update element
if (inactiveIndex !== -1) {
  users[inactiveIndex].active = true;
  console.log(users[inactiveIndex]); // { name: "Bob", active: true }
}

// Find and remove element
const products = ["Laptop", "Mouse", "Keyboard"];
const removeIndex = products.findIndex(p => p === "Mouse");
if (removeIndex !== -1) {
  products.splice(removeIndex, 1);
}
console.log(products); // ["Laptop", "Keyboard"]`,
              language: 'javascript',
              explanation: 'findIndex() returns index of first match or -1 if not found. Use to locate element position for updating or removing. Check for -1 before using index.'
            },
            {
              title: 'find() vs filter() vs indexOf()',
              code: `const numbers = [1, 2, 3, 4, 5, 2, 3];

// find() - returns first matching element
const found = numbers.find(n => n === 2);
console.log(found); // 2 (the element itself)

// filter() - returns all matching elements
const filtered = numbers.filter(n => n === 2);
console.log(filtered); // [2, 2] (array of matches)

// indexOf() - returns index of first match (exact value only)
const indexOfTwo = numbers.indexOf(2);
console.log(indexOfTwo); // 1 (index of first 2)

// findIndex() - returns index with condition
const indexGreaterThan3 = numbers.findIndex(n => n > 3);
console.log(indexGreaterThan3); // 3 (index of 4)

// When to use each:
// find() - get first matching element with condition
const firstEven = numbers.find(n => n % 2 === 0);

// filter() - get all matching elements
const allEvens = numbers.filter(n => n % 2 === 0);

// indexOf() - find exact value (simple, fast)
const indexOfThree = numbers.indexOf(3);

// findIndex() - find index with condition
const indexOfFirstOdd = numbers.findIndex(n => n % 2 !== 0);

console.log("find:", firstEven);        // 2
console.log("filter:", allEvens);       // [2, 4, 2]
console.log("indexOf:", indexOfThree);  // 2
console.log("findIndex:", indexOfFirstOdd); // 0`,
              language: 'javascript',
              explanation: 'find() returns element, filter() returns array, indexOf() finds exact value, findIndex() finds index with condition. Use find() for single item, filter() for multiple items.'
            }
          ],
          comparison: {
            title: 'Finding Elements',
            options: [
              {
                name: 'find()',
                description: 'Returns first matching element',
                whenToUse: 'Finding single item by condition',
                example: 'users.find(u => u.id === 1)'
              },
              {
                name: 'findIndex()',
                description: 'Returns index of first match',
                whenToUse: 'Need position to update/remove',
                example: 'users.findIndex(u => u.id === 1)'
              },
              {
                name: 'filter()',
                description: 'Returns all matching elements',
                whenToUse: 'Finding multiple items',
                example: 'users.filter(u => u.active)'
              },
              {
                name: 'indexOf()',
                description: 'Returns index of exact value',
                whenToUse: 'Simple value search',
                example: 'numbers.indexOf(5)'
              }
            ]
          }
        },
        {
          id: 'reduce-method',
          title: 'reduce() Method',
          description: 'Reduce an array to a single value through accumulation',
          keyPoints: [
            'reduce() accumulates array into single value',
            'Callback receives accumulator and current value',
            'Provide initial value as second argument',
            'Use for sums, products, object building',
            'More flexible than specialized methods'
          ],
          codeExamples: [
            {
              title: 'Basic reduce() Usage',
              code: `const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0); // 0 is initial value
console.log(sum); // 15

// How it works:
// accumulator starts at 0 (initial value)
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// Arrow function syntax
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2); // 15

// Product of all numbers
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120 (1 * 2 * 3 * 4 * 5)

// Find maximum value
const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);
console.log(max); // 5

// Find minimum value
const min = numbers.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
}, numbers[0]);
console.log(min); // 1`,
              language: 'javascript',
              explanation: 'reduce() takes callback with accumulator and current value. Initial value (second argument) sets starting point. Accumulator carries result through iterations. Returns single value.'
            },
            {
              title: 'reduce() with Objects',
              code: `const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 29 },
  { name: "Keyboard", price: 79 }
];

// Calculate total price
const total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);
console.log(total); // 1107

// Count items by category
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Orange", category: "Fruit" }
];

const counts = items.reduce((acc, item) => {
  const category = item.category;
  if (acc[category]) {
    acc[category]++;
  } else {
    acc[category] = 1;
  }
  return acc;
}, {});
console.log(counts); // { Fruit: 3, Vegetable: 2 }

// Group items by category
const grouped = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});
console.log(grouped);
// { 
//   Fruit: ["Apple", "Banana", "Orange"],
//   Vegetable: ["Carrot", "Broccoli"]
// }`,
              language: 'javascript',
              explanation: 'reduce() builds objects by accumulating properties. Use for totaling prices, counting occurrences, grouping items. Initial value {} creates empty object to build on.'
            },
            {
              title: 'reduce() for Array Transformation',
              code: `// Flatten nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Remove duplicates
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(unique); // [1, 2, 3, 4, 5]

// Convert array to object
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersById);
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }

// Build string from array
const words = ["Hello", "World", "from", "JavaScript"];
const sentence = words.reduce((acc, word, index) => {
  return acc + (index > 0 ? " " : "") + word;
}, "");
console.log(sentence); // "Hello World from JavaScript"`,
              language: 'javascript',
              explanation: 'reduce() transforms arrays: flattening, removing duplicates, converting to objects, building strings. Initial value [] or {} determines result type. Very flexible method.'
            },
            {
              title: 'Practical reduce() Examples',
              code: `// Calculate average
const grades = [85, 90, 78, 92, 88];
const average = grades.reduce((sum, grade, index, array) => {
  sum += grade;
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);
console.log(average); // 86.6

// Or simpler:
const avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(avg); // 86.6

// Count occurrences
const letters = ["a", "b", "a", "c", "b", "a"];
const letterCount = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(letterCount); // { a: 3, b: 2, c: 1 }

// Pipe functions (advanced)
const double = x => x * 2;
const square = x => x * x;
const addTen = x => x + 10;

const functions = [double, square, addTen];
const result = functions.reduce((acc, fn) => fn(acc), 5);
// 5 -> double -> 10 -> square -> 100 -> addTen -> 110
console.log(result); // 110

// Shopping cart total with tax
const cart = [
  { name: "Item 1", price: 10, quantity: 2 },
  { name: "Item 2", price: 15, quantity: 1 },
  { name: "Item 3", price: 8, quantity: 3 }
];

const subtotal = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);
const tax = subtotal * 0.1;
const total = subtotal + tax;
console.log("Subtotal: $" + subtotal); // $59
console.log("Tax: $" + tax);           // $5.9
console.log("Total: $" + total);       // $64.9`,
              language: 'javascript',
              explanation: 'reduce() calculates averages, counts occurrences, chains functions, computes totals. Access index and array in callback for advanced logic. Versatile for many operations.'
            }
          ],
          comparison: {
            title: 'When to Use reduce()',
            options: [
              {
                name: 'reduce()',
                description: 'Accumulate to single value',
                whenToUse: 'Sums, products, building objects, complex transformations',
                example: 'numbers.reduce((sum, n) => sum + n, 0)'
              },
              {
                name: 'map()',
                description: 'Transform each element',
                whenToUse: 'One-to-one transformations',
                example: 'numbers.map(n => n * 2)'
              },
              {
                name: 'filter()',
                description: 'Select subset of elements',
                whenToUse: 'Removing items by condition',
                example: 'numbers.filter(n => n > 5)'
              }
            ]
          }
        },
        {
          id: 'chaining-methods',
          title: 'Chaining Array Methods',
          description: 'Combine multiple array methods for complex operations',
          keyPoints: [
            'Chain methods by calling one after another',
            'Each method returns new array (except forEach)',
            'Order matters - filter before map for efficiency',
            'Common pattern: filter → map → reduce',
            'Keep chains readable - break into steps if needed'
          ],
          codeExamples: [
            {
              title: 'Basic Method Chaining',
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers, double them, sum them
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(n => n * 2)           // [4, 8, 12, 16, 20]
  .reduce((sum, n) => sum + n, 0); // 60
console.log(result); // 60

// Step by step (same result):
const evens = numbers.filter(n => n % 2 === 0);
const doubled = evens.map(n => n * 2);
const sum = doubled.reduce((sum, n) => sum + n, 0);
console.log(sum); // 60

// Get odd numbers, square them, get first 3
const oddSquares = numbers
  .filter(n => n % 2 !== 0)  // [1, 3, 5, 7, 9]
  .map(n => n * n)           // [1, 9, 25, 49, 81]
  .slice(0, 3);              // [1, 9, 25]
console.log(oddSquares); // [1, 9, 25]`,
              language: 'javascript',
              explanation: 'Chain methods by calling one after another with dot notation. Each method returns new array for next method. Read top to bottom. Can break into variables for clarity.'
            },
            {
              title: 'Chaining with Objects',
              code: `const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Mouse", price: 29, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
  { id: 4, name: "Keyboard", price: 79, category: "Electronics", inStock: true },
  { id: 5, name: "Chair", price: 199, category: "Furniture", inStock: true }
];

// Get names of in-stock electronics under $100
const affordableElectronics = products
  .filter(p => p.category === "Electronics")
  .filter(p => p.inStock)
  .filter(p => p.price < 100)
  .map(p => p.name);
console.log(affordableElectronics); // ["Mouse", "Keyboard"]

// Calculate total price of in-stock items
const total = products
  .filter(p => p.inStock)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);
console.log(total); // 1306

// Get expensive items, sort by price, get top 3 names
const topExpensive = products
  .filter(p => p.price > 50)
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)
  .map(p => p.name);
console.log(topExpensive); // ["Laptop", "Desk", "Chair"]

// Count items by category (in stock only)
const categoryCounts = products
  .filter(p => p.inStock)
  .reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
console.log(categoryCounts); // { Electronics: 3, Furniture: 1 }`,
              language: 'javascript',
              explanation: 'Chain filter → map → reduce for complex queries. Multiple filters narrow down results. Sort before slice to get top items. Reduce at end to aggregate data.'
            },
            {
              title: 'Practical Chaining Examples',
              code: `// Process user data
const users = [
  { name: "Alice", age: 25, active: true, purchases: 5 },
  { name: "Bob", age: 17, active: false, purchases: 2 },
  { name: "Charlie", age: 30, active: true, purchases: 8 },
  { name: "David", age: 22, active: true, purchases: 3 }
];

// Get names of active adult users with 3+ purchases
const qualifiedUsers = users
  .filter(u => u.age >= 18)
  .filter(u => u.active)
  .filter(u => u.purchases >= 3)
  .map(u => u.name);
console.log(qualifiedUsers); // ["Alice", "Charlie", "David"]

// Calculate average purchases for active users
const avgPurchases = users
  .filter(u => u.active)
  .map(u => u.purchases)
  .reduce((sum, p) => sum + p, 0) / 
  users.filter(u => u.active).length;
console.log(avgPurchases); // 5.33

// Text processing
const text = "Hello World from JavaScript";
const wordStats = text
  .toLowerCase()
  .split(" ")
  .filter(word => word.length > 4)
  .map(word => word.length)
  .reduce((sum, len) => sum + len, 0);
console.log(wordStats); // 20 (hello:5 + world:5 + javascript:10)

// Get unique categories from products
const categories = products
  .map(p => p.category)
  .filter((cat, index, array) => array.indexOf(cat) === index);
console.log(categories); // ["Electronics", "Furniture"]

// Or using reduce for unique values
const uniqueCategories = products
  .reduce((acc, p) => {
    if (!acc.includes(p.category)) {
      acc.push(p.category);
    }
    return acc;
  }, []);
console.log(uniqueCategories); // ["Electronics", "Furniture"]`,
              language: 'javascript',
              explanation: 'Chain methods for data processing: filtering users, calculating averages, text analysis, finding unique values. Break complex chains into steps for readability.'
            },
            {
              title: 'Chaining Best Practices',
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ GOOD: Filter before map (more efficient)
const result1 = numbers
  .filter(n => n % 2 === 0)  // Reduces array size first
  .map(n => n * 2);          // Fewer operations
console.log(result1); // [4, 8, 12, 16, 20]

// ❌ LESS EFFICIENT: Map before filter
const result2 = numbers
  .map(n => n * 2)           // Processes all elements
  .filter(n => n % 2 === 0); // Then filters
console.log(result2); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// ✅ GOOD: Readable chain with comments
const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Mouse", price: 29, inStock: true }
];

const total = products
  .filter(p => p.inStock)           // Only in-stock items
  .map(p => p.price)                // Extract prices
  .reduce((sum, p) => sum + p, 0);  // Sum them up
console.log(total);

// ✅ GOOD: Break complex chains into steps
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = data.filter(n => n % 2 === 0);
const doubled = evens.map(n => n * 2);
const sum = doubled.reduce((s, n) => s + n, 0);
console.log(sum); // 60

// ❌ BAD: Too complex in one chain
const complexResult = data
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .filter(n => n > 5)
  .map(n => ({ value: n, squared: n * n }))
  .reduce((acc, obj) => acc + obj.squared, 0);
// Hard to read and debug!`,
              language: 'javascript',
              explanation: 'Filter before map for efficiency. Add comments to chains. Break complex chains into named steps. Keep chains readable. Order matters for performance and results.'
            }
          ],
          comparison: {
            title: 'Method Chaining Patterns',
            options: [
              {
                name: 'filter → map',
                description: 'Select then transform',
                whenToUse: 'Get subset and convert it',
                example: 'arr.filter(n => n > 5).map(n => n * 2)'
              },
              {
                name: 'filter → reduce',
                description: 'Select then aggregate',
                whenToUse: 'Sum/count filtered items',
                example: 'arr.filter(n => n > 5).reduce((s, n) => s + n, 0)'
              },
              {
                name: 'map → filter',
                description: 'Transform then select',
                whenToUse: 'Convert then filter results',
                example: 'arr.map(n => n * 2).filter(n => n > 10)'
              },
              {
                name: 'filter → map → reduce',
                description: 'Full pipeline',
                whenToUse: 'Complex data processing',
                example: 'arr.filter().map().reduce()'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-2-week-4',
      weekNumber: 4,
      title: 'Intro to Tailwind CSS',
      description: 'Modern utility-first CSS framework for rapid UI development',
      concepts: [
        {
          id: 'tailwind-basics',
          title: 'What is Tailwind CSS?',
          description: 'Understanding utility-first CSS and Tailwind\'s approach',
          keyPoints: [
            'Utility-first CSS framework with pre-built classes',
            'Style elements directly in HTML without writing custom CSS',
            'Responsive design built-in with breakpoint prefixes',
            'Highly customizable through configuration',
            'Smaller bundle sizes with production optimization'
          ],
          codeExamples: [
            {
              title: 'Traditional CSS vs Tailwind',
              code: `<!-- Traditional CSS Approach -->
<style>
  .button {
    background-color: blue;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 600;
  }
  .button:hover {
    background-color: darkblue;
  }
</style>
<button class="button">Click Me</button>

<!-- Tailwind CSS Approach -->
<button class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">
  Click Me
</button>`,
              language: 'html',
              explanation: 'Tailwind uses utility classes directly in HTML instead of writing custom CSS. Each class does one thing (bg-blue-500 = background color, px-4 = horizontal padding, etc.).'
            },
            {
              title: 'Basic Tailwind Setup',
              code: `<!-- Include Tailwind via CDN (for learning/prototyping) -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">
      Hello Tailwind!
    </h1>
    <p class="text-gray-600 mt-4">
      This is styled with Tailwind CSS utility classes.
    </p>
  </div>
</body>
</html>`,
              language: 'html',
              explanation: 'For learning, use the CDN script tag. For production, install Tailwind via npm. The utility classes style elements without writing CSS files.'
            },
            {
              title: 'Common Utility Classes',
              code: `<!-- Text Styling -->
<p class="text-sm">Small text</p>
<p class="text-base">Normal text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>
<p class="text-2xl">2X large text</p>

<p class="font-light">Light weight</p>
<p class="font-normal">Normal weight</p>
<p class="font-semibold">Semibold weight</p>
<p class="font-bold">Bold weight</p>

<p class="text-gray-500">Gray text</p>
<p class="text-blue-600">Blue text</p>
<p class="text-red-500">Red text</p>

<!-- Spacing -->
<div class="m-4">Margin all sides</div>
<div class="mt-4">Margin top</div>
<div class="p-4">Padding all sides</div>
<div class="px-4 py-2">Padding horizontal & vertical</div>`,
              language: 'html',
              explanation: 'Tailwind has intuitive naming: text-{size}, font-{weight}, text-{color}-{shade}, m-{size} for margin, p-{size} for padding. Numbers represent spacing scale (4 = 1rem = 16px).'
            }
          ]
        },
        {
          id: 'layout-utilities',
          title: 'Layout & Flexbox',
          description: 'Creating layouts with Tailwind\'s flexbox and grid utilities',
          keyPoints: [
            'Use flex to create flexible layouts',
            'justify-* controls horizontal alignment',
            'items-* controls vertical alignment',
            'gap-* adds spacing between flex items',
            'flex-col changes direction to vertical'
          ],
          codeExamples: [
            {
              title: 'Flexbox Basics',
              code: `<!-- Horizontal Flex Container -->
<div class="flex gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
</div>

<!-- Vertical Flex Container -->
<div class="flex flex-col gap-4">
  <div class="bg-green-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-green-500 p-4">Item 3</div>
</div>

<!-- Centered Content -->
<div class="flex items-center justify-center h-screen">
  <div class="bg-purple-500 p-8 text-white">
    Perfectly Centered!
  </div>
</div>`,
              language: 'html',
              explanation: 'flex creates a flex container. flex-col makes it vertical. gap-4 adds spacing. items-center centers vertically, justify-center centers horizontally.'
            },
            {
              title: 'Flex Alignment Options',
              code: `<!-- Justify Content (Horizontal) -->
<div class="flex justify-start">Left aligned</div>
<div class="flex justify-center">Center aligned</div>
<div class="flex justify-end">Right aligned</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>

<!-- Align Items (Vertical) -->
<div class="flex items-start h-32">Top aligned</div>
<div class="flex items-center h-32">Center aligned</div>
<div class="flex items-end h-32">Bottom aligned</div>
<div class="flex items-stretch h-32">Stretched</div>

<!-- Combined -->
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>`,
              language: 'html',
              explanation: 'justify-* controls main axis (horizontal by default). items-* controls cross axis (vertical by default). Combine them for precise positioning.'
            },
            {
              title: 'Responsive Flexbox',
              code: `<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="bg-blue-500 p-4 flex-1">Column 1</div>
  <div class="bg-blue-500 p-4 flex-1">Column 2</div>
  <div class="bg-blue-500 p-4 flex-1">Column 3</div>
</div>

<!-- Different alignment per breakpoint -->
<div class="flex flex-col items-start md:flex-row md:items-center md:justify-between">
  <h2 class="text-2xl font-bold">Title</h2>
  <button class="bg-blue-500 text-white px-4 py-2 rounded">
    Action
  </button>
</div>`,
              language: 'html',
              explanation: 'Breakpoint prefixes (md:, lg:, etc.) apply styles at different screen sizes. md:flex-row means "use flex-row on medium screens and up". Mobile-first approach.'
            }
          ]
        },
        {
          id: 'colors-backgrounds',
          title: 'Colors & Backgrounds',
          description: 'Working with Tailwind\'s color system and backgrounds',
          keyPoints: [
            'Colors use format: {property}-{color}-{shade}',
            'Shades range from 50 (lightest) to 950 (darkest)',
            'Common colors: gray, red, blue, green, yellow, purple, pink',
            'bg-* for backgrounds, text-* for text color',
            'border-* for border colors'
          ],
          codeExamples: [
            {
              title: 'Color Palette',
              code: `<!-- Background Colors -->
<div class="bg-gray-100 p-4">Light gray background</div>
<div class="bg-blue-500 p-4 text-white">Blue background</div>
<div class="bg-red-600 p-4 text-white">Red background</div>
<div class="bg-green-500 p-4 text-white">Green background</div>

<!-- Text Colors -->
<p class="text-gray-600">Gray text</p>
<p class="text-blue-500">Blue text</p>
<p class="text-red-500">Red text</p>
<p class="text-green-600">Green text</p>

<!-- Color Shades -->
<div class="bg-blue-50 p-2">Lightest blue (50)</div>
<div class="bg-blue-200 p-2">Light blue (200)</div>
<div class="bg-blue-500 p-2 text-white">Medium blue (500)</div>
<div class="bg-blue-700 p-2 text-white">Dark blue (700)</div>
<div class="bg-blue-950 p-2 text-white">Darkest blue (950)</div>`,
              language: 'html',
              explanation: 'Tailwind provides a consistent color scale. 500 is the base shade. Lower numbers are lighter, higher are darker. Use text-white with dark backgrounds for readability.'
            },
            {
              title: 'Gradients & Opacity',
              code: `<!-- Linear Gradients -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
  Left to right gradient
</div>

<div class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-8 text-white">
  Diagonal gradient with 3 colors
</div>

<!-- Gradient Directions -->
<div class="bg-gradient-to-t">To top</div>
<div class="bg-gradient-to-tr">To top-right</div>
<div class="bg-gradient-to-r">To right</div>
<div class="bg-gradient-to-br">To bottom-right</div>
<div class="bg-gradient-to-b">To bottom</div>

<!-- Opacity -->
<div class="bg-blue-500 bg-opacity-50 p-4">50% opacity</div>
<div class="bg-red-500 bg-opacity-75 p-4">75% opacity</div>
<div class="text-gray-900 text-opacity-60">60% text opacity</div>`,
              language: 'html',
              explanation: 'Gradients use bg-gradient-to-{direction} with from-{color} and to-{color}. Add via-{color} for 3-color gradients. Control opacity with bg-opacity-{amount}.'
            },
            {
              title: 'Borders & Shadows',
              code: `<!-- Borders -->
<div class="border border-gray-300 p-4">Default border</div>
<div class="border-2 border-blue-500 p-4">Thicker blue border</div>
<div class="border-4 border-red-500 p-4">Very thick red border</div>

<!-- Border Sides -->
<div class="border-t border-gray-300 p-4">Top border only</div>
<div class="border-l-4 border-blue-500 p-4">Left accent border</div>

<!-- Rounded Corners -->
<div class="rounded p-4 bg-gray-200">Small rounded</div>
<div class="rounded-lg p-4 bg-gray-200">Large rounded</div>
<div class="rounded-full p-4 bg-gray-200">Fully rounded (pill)</div>

<!-- Shadows -->
<div class="shadow p-4">Small shadow</div>
<div class="shadow-md p-4">Medium shadow</div>
<div class="shadow-lg p-4">Large shadow</div>
<div class="shadow-xl p-4">Extra large shadow</div>`,
              language: 'html',
              explanation: 'border adds 1px border. border-{n} controls thickness. rounded adds border-radius. shadow adds box-shadow. Combine for polished UI elements.'
            }
          ]
        },
        {
          id: 'responsive-design',
          title: 'Responsive Design',
          description: 'Building mobile-first responsive layouts with breakpoints',
          keyPoints: [
            'Mobile-first approach - base styles apply to all sizes',
            'Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)',
            'Use prefix like md: to apply styles at that breakpoint and up',
            'Stack classes for different breakpoints',
            'Hide/show elements at different sizes'
          ],
          codeExamples: [
            {
              title: 'Responsive Text & Spacing',
              code: `<!-- Responsive Text Size -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
<!-- Mobile: 2xl, Tablet: 4xl, Desktop: 5xl -->

<!-- Responsive Padding -->
<div class="p-4 md:p-8 lg:p-12">
  More padding on larger screens
</div>

<!-- Responsive Margin -->
<div class="mt-4 md:mt-8 lg:mt-16">
  More top margin on larger screens
</div>

<!-- Responsive Width -->
<div class="w-full md:w-1/2 lg:w-1/3">
  Full width mobile, half on tablet, third on desktop
</div>`,
              language: 'html',
              explanation: 'Start with mobile styles (no prefix), then add breakpoint prefixes for larger screens. md: applies at 768px and up. Styles cascade upward.'
            },
            {
              title: 'Responsive Layout',
              code: `<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
  <div class="bg-blue-500 p-4">Item 4</div>
  <div class="bg-blue-500 p-4">Item 5</div>
  <div class="bg-blue-500 p-4">Item 6</div>
</div>
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->

<!-- Responsive Flex Direction -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-green-500 p-4">Sidebar</div>
  <div class="flex-1 bg-green-500 p-4">Main Content</div>
</div>
<!-- Mobile: Stacked, Desktop: Side by side -->`,
              language: 'html',
              explanation: 'Grid and flex layouts adapt to screen size. grid-cols-1 on mobile, grid-cols-2 on tablet, grid-cols-3 on desktop. flex-col on mobile, flex-row on desktop.'
            },
            {
              title: 'Hide/Show Elements',
              code: `<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">
  Only visible on tablet and larger
</div>

<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">
  Only visible on mobile
</div>

<!-- Responsive Navigation -->
<nav class="flex items-center justify-between p-4">
  <div class="text-xl font-bold">Logo</div>
  
  <!-- Mobile menu button -->
  <button class="md:hidden">
    Menu
  </button>
  
  <!-- Desktop navigation -->
  <div class="hidden md:flex gap-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
  </div>
</nav>`,
              language: 'html',
              explanation: 'hidden hides elements. block shows them. Combine with breakpoints to show/hide at different sizes. Common pattern: hamburger menu on mobile, full nav on desktop.'
            }
          ]
        },
        {
          id: 'hover-states',
          title: 'Interactive States',
          description: 'Adding hover, focus, and active states to elements',
          keyPoints: [
            'hover: prefix for hover states',
            'focus: prefix for focus states (inputs, buttons)',
            'active: prefix for active/pressed states',
            'group-hover: for parent hover effects',
            'Transitions smooth state changes'
          ],
          codeExamples: [
            {
              title: 'Hover Effects',
              code: `<!-- Hover Background Color -->
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Hover Me
</button>

<!-- Hover Text Color -->
<a href="#" class="text-blue-500 hover:text-blue-700 hover:underline">
  Hover Link
</a>

<!-- Hover Scale -->
<div class="bg-purple-500 p-4 hover:scale-110 transition">
  Grows on hover
</div>

<!-- Hover Shadow -->
<div class="bg-white p-4 shadow hover:shadow-lg transition">
  Shadow increases on hover
</div>

<!-- Multiple Hover Effects -->
<button class="bg-green-500 hover:bg-green-700 hover:scale-105 text-white px-6 py-3 rounded-lg transition">
  Animated Button
</button>`,
              language: 'html',
              explanation: 'Add hover: prefix to any utility class. Combine multiple hover effects. Add transition class for smooth animations between states.'
            },
            {
              title: 'Focus & Active States',
              code: `<!-- Focus States (for inputs) -->
<input 
  type="text" 
  class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded"
  placeholder="Focus me"
/>

<!-- Focus on buttons -->
<button class="bg-blue-500 focus:ring-4 focus:ring-blue-300 text-white px-4 py-2 rounded">
  Focus Ring
</button>

<!-- Active State (when pressed) -->
<button class="bg-blue-500 active:bg-blue-800 text-white px-4 py-2 rounded">
  Press Me
</button>

<!-- Combined States -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white px-4 py-2 rounded transition">
  Full Interactive Button
</button>`,
              language: 'html',
              explanation: 'focus: styles appear when element is focused (tab or click). active: styles appear when pressed. focus:ring adds an outline ring for accessibility.'
            },
            {
              title: 'Group Hover',
              code: `<!-- Card with group hover -->
<div class="group bg-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer">
  <h3 class="text-xl font-bold group-hover:text-blue-500 transition">
    Card Title
  </h3>
  <p class="text-gray-600 mt-2">
    Hover over the card to see the title change color
  </p>
  <button class="mt-4 bg-blue-500 group-hover:bg-blue-700 text-white px-4 py-2 rounded transition">
    Learn More
  </button>
</div>

<!-- Image with overlay on hover -->
<div class="group relative overflow-hidden rounded-lg">
  <img src="image.jpg" class="group-hover:scale-110 transition duration-300" />
  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition">
    <div class="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition">
      <span class="text-white text-xl font-bold">View Details</span>
    </div>
  </div>
</div>`,
              language: 'html',
              explanation: 'Add group class to parent. Use group-hover: on children to style them when parent is hovered. Great for cards, images, and complex interactive components.'
            }
          ],
          comparison: {
            title: 'State Variants',
            options: [
              {
                name: 'hover:',
                description: 'Styles when mouse hovers over element',
                whenToUse: 'Interactive elements like buttons, links, cards',
                example: 'hover:bg-blue-700 hover:scale-105'
              },
              {
                name: 'focus:',
                description: 'Styles when element receives focus',
                whenToUse: 'Form inputs, buttons for keyboard navigation',
                example: 'focus:ring-2 focus:border-blue-500'
              },
              {
                name: 'active:',
                description: 'Styles when element is being pressed',
                whenToUse: 'Buttons to show pressed state',
                example: 'active:bg-blue-800 active:scale-95'
              },
              {
                name: 'group-hover:',
                description: 'Styles child when parent is hovered',
                whenToUse: 'Complex components with multiple hover effects',
                example: 'group-hover:text-blue-500'
              }
            ]
          }
        },
        {
          id: 'common-components',
          title: 'Building Common Components',
          description: 'Creating buttons, cards, and forms with Tailwind',
          keyPoints: [
            'Combine utilities to create reusable components',
            'Use consistent spacing and colors',
            'Add transitions for smooth interactions',
            'Consider accessibility (focus states, contrast)',
            'Start with a design system (colors, spacing, typography)'
          ],
          codeExamples: [
            {
              title: 'Button Variants',
              code: `<!-- Primary Button -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
  Secondary Button
</button>

<!-- Outline Button -->
<button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition">
  Outline Button
</button>

<!-- Danger Button -->
<button class="bg-red-500 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition">
  Delete
</button>

<!-- Button Sizes -->
<button class="bg-blue-500 text-white px-3 py-1 rounded text-sm">Small</button>
<button class="bg-blue-500 text-white px-4 py-2 rounded">Medium</button>
<button class="bg-blue-500 text-white px-6 py-3 rounded text-lg">Large</button>`,
              language: 'html',
              explanation: 'Create button variants by combining background, text, padding, and hover utilities. Use consistent patterns across your app. Add transitions for smooth effects.'
            },
            {
              title: 'Card Component',
              code: `<!-- Basic Card -->
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600 mb-4">
    This is a basic card component with shadow and padding.
  </p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
    Action
  </button>
</div>

<!-- Card with Image -->
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="image.jpg" alt="Card" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Card with Image</h3>
    <p class="text-gray-600 mb-4">
      Image cards are great for products, blog posts, and galleries.
    </p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
      Read More
    </button>
  </div>
</div>`,
              language: 'html',
              explanation: 'Cards combine background, shadow, rounded corners, and padding. Add overflow-hidden for images. Use hover:shadow-xl for interactive cards.'
            },
            {
              title: 'Form Components',
              code: `<!-- Form with Tailwind -->
<form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-6">Contact Form</h2>
  
  <!-- Text Input -->
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">
      Name
    </label>
    <input 
      type="text" 
      class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      placeholder="Enter your name"
    />
  </div>
  
  <!-- Email Input -->
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">
      Email
    </label>
    <input 
      type="email" 
      class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      placeholder="your@email.com"
    />
  </div>
  
  <!-- Submit Button -->
  <button 
    type="submit" 
    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
  >
    Send Message
  </button>
</form>`,
              language: 'html',
              explanation: 'Forms use consistent spacing, focus states, and transitions. w-full makes inputs full width. focus:ring adds accessible focus indicators. Use mb-{n} for spacing between fields.'
            }
          ]
        }
      ]
    },
    {
      id: 'level-2-week-5',
      weekNumber: 5,
      title: 'N-Tier API Architecture (Fundamentals)',
      description: 'Separating a C# Web API into Presentation, Business Logic, and Data Access layers with DTOs',
      concepts: [
        {
          id: 'what-is-n-tier',
          title: 'What is N-Tier Architecture?',
          description: 'Separating an application into distinct layers with clear responsibilities',
          keyPoints: [
            'N-Tier means organizing code into multiple layers (tiers), each with one responsibility',
            'Common 3 layers: Presentation (API) → Business Logic (Services) → Data Access (Repositories)',
            'Each layer only talks to the layer directly below it',
            'Goals: separation of concerns, testability, maintainability, reusability',
            'Trade-off: more files and boilerplate vs simpler maintenance long term'
          ],
          codeExamples: [
            {
              title: 'Before vs After N-Tier',
              code: `// ❌ BEFORE - Everything in the Controller (hard to test, hard to change)
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _db;
    public ProductsController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        // Data access + business logic + HTTP response ALL in one place
        var products = await _db.Products.Where(p => p.IsActive).ToListAsync();
        foreach (var p in products) p.Price *= 1.1m; // tax logic mixed in
        return Ok(products); // returns entity directly - leaks DB model
    }
}

// ✅ AFTER - Layers separated
// Controller: only handles HTTP
// Service: contains business rules (tax calculation)
// Repository: owns database queries
// DTO: shape returned to the client

// Controller
[HttpGet]
public async Task<IActionResult> GetAll()
{
    var products = await _productService.GetActiveProductsAsync();
    return Ok(products);
}`,
              language: 'csharp',
              explanation: 'The first version mixes HTTP, business logic, and database queries together. N-Tier splits each concern so you can test, swap, or change one layer without touching the others.'
            },
            {
              title: 'The Three Layers',
              code: `// ╔══════════════════════════════════════╗
// ║  PRESENTATION LAYER (Controllers)    ║  ← Handles HTTP requests/responses
// ║  - Receives requests                  ║
// ║  - Returns HTTP status codes          ║
// ║  - Calls into Services                ║
// ╚══════════════════════════════════════╝
//                   ▼
// ╔══════════════════════════════════════╗
// ║  BUSINESS LOGIC LAYER (Services)     ║  ← The "rules" of your app
// ║  - Validation                         ║
// ║  - Calculations                       ║
// ║  - Orchestrates multiple repositories ║
// ║  - Maps between entities and DTOs     ║
// ╚══════════════════════════════════════╝
//                   ▼
// ╔══════════════════════════════════════╗
// ║  DATA ACCESS LAYER (Repositories)    ║  ← Talks to the database
// ║  - EF Core / SQL queries              ║
// ║  - Returns entities                   ║
// ║  - No business rules                  ║
// ╚══════════════════════════════════════╝
//                   ▼
//              Database`,
              language: 'text',
              explanation: 'Data flows downward (request) and back up (response). Each layer depends only on the layer directly below it. Controllers never touch the database; repositories never know about HTTP.'
            },
            {
              title: 'Folder Structure',
              code: `MyApi/
├── Controllers/
│   └── ProductsController.cs       ← Presentation
├── Services/
│   ├── IProductService.cs
│   └── ProductService.cs           ← Business Logic
├── Repositories/
│   ├── IProductRepository.cs
│   └── ProductRepository.cs        ← Data Access
├── Models/
│   └── Product.cs                  ← Entity (matches DB)
├── DTOs/
│   ├── ProductDto.cs               ← What the API returns
│   ├── CreateProductDto.cs         ← What the API accepts
│   └── UpdateProductDto.cs
├── Data/
│   └── AppDbContext.cs
└── Program.cs                      ← Wires everything up (DI)`,
              language: 'text',
              explanation: 'A typical N-Tier project structure. Each folder represents a layer. Keep entities (DB shape) and DTOs (API shape) in separate folders to make the boundary obvious.'
            }
          ]
        },
        {
          id: 'presentation-layer',
          title: 'Presentation Layer (Controllers)',
          description: 'Controllers should only handle HTTP — never contain business logic or query the database directly',
          keyPoints: [
            'Controllers handle routing, HTTP status codes, and request/response shapes',
            'They call into Services — never directly into DbContext or Repositories',
            'Controllers should be "thin" — ideally just a few lines per action',
            'Return DTOs, not entities',
            'Validation attributes live on DTOs so controllers stay clean'
          ],
          codeExamples: [
            {
              title: 'A Thin Controller',
              code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetAll()
    {
        var products = await _productService.GetAllAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetById(int id)
    {
        var product = await _productService.GetByIdAsync(id);
        if (product == null) return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create(CreateProductDto dto)
    {
        var created = await _productService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateProductDto dto)
    {
        var success = await _productService.UpdateAsync(id, dto);
        return success ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _productService.DeleteAsync(id);
        return success ? NoContent() : NotFound();
    }
}`,
              language: 'csharp',
              explanation: 'Notice the controller has ZERO business logic. Each action is 1–3 lines: call the service, translate the result to an HTTP response. This is what "thin controller" means.'
            },
            {
              title: 'Validation on DTOs',
              code: `using System.ComponentModel.DataAnnotations;

public class CreateProductDto
{
    [Required]
    [StringLength(100, MinimumLength = 3)]
    public string Name { get; set; } = string.Empty;

    [Range(0.01, 10000)]
    public decimal Price { get; set; }

    [StringLength(500)]
    public string? Description { get; set; }
}

// Controller automatically validates via [ApiController] attribute
[HttpPost]
public async Task<ActionResult<ProductDto>> Create(CreateProductDto dto)
{
    // If dto is invalid, ASP.NET automatically returns 400 Bad Request
    // with a list of errors — we don't have to write any checks here.
    var created = await _productService.CreateAsync(dto);
    return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
}`,
              language: 'csharp',
              explanation: 'Validation attributes ([Required], [Range], etc.) go on DTOs. The [ApiController] attribute auto-returns 400 with a detailed error body when validation fails, so controllers stay clean.'
            }
          ]
        },
        {
          id: 'business-logic-layer',
          title: 'Business Logic Layer (Services)',
          description: 'Services hold application rules — validation, calculations, and orchestration',
          keyPoints: [
            'Services define the actual behavior of your application',
            'They are the only place business rules should live',
            'Always define an interface (IProductService) and register via DI',
            'Services call repositories to get/save data — they never call DbContext directly',
            'Services handle mapping between entities and DTOs'
          ],
          codeExamples: [
            {
              title: 'Service Interface',
              code: `public interface IProductService
{
    Task<IEnumerable<ProductDto>> GetAllAsync();
    Task<ProductDto?> GetByIdAsync(int id);
    Task<ProductDto> CreateAsync(CreateProductDto dto);
    Task<bool> UpdateAsync(int id, UpdateProductDto dto);
    Task<bool> DeleteAsync(int id);
}`,
              language: 'csharp',
              explanation: 'Define an interface first. This allows controllers to depend on an abstraction (not a concrete class), which makes unit testing and swapping implementations easy.'
            },
            {
              title: 'Service Implementation',
              code: `public class ProductService : IProductService
{
    private readonly IProductRepository _repository;

    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<ProductDto>> GetAllAsync()
    {
        var products = await _repository.GetAllAsync();
        return products.Select(MapToDto);
    }

    public async Task<ProductDto?> GetByIdAsync(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        return product == null ? null : MapToDto(product);
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        // Business rule: apply 10% tax before storing
        var product = new Product
        {
            Name = dto.Name.Trim(),
            Price = dto.Price * 1.10m,
            Description = dto.Description
        };

        var created = await _repository.AddAsync(product);
        return MapToDto(created);
    }

    public async Task<bool> UpdateAsync(int id, UpdateProductDto dto)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null) return false;

        product.Name = dto.Name.Trim();
        product.Price = dto.Price;
        product.Description = dto.Description;

        await _repository.UpdateAsync(product);
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null) return false;
        await _repository.DeleteAsync(product);
        return true;
    }

    private static ProductDto MapToDto(Product p) => new()
    {
        Id = p.Id,
        Name = p.Name,
        Price = p.Price,
        Description = p.Description
    };
}`,
              language: 'csharp',
              explanation: 'The service contains business rules (tax calculation, trimming whitespace) and maps Product entities to ProductDtos. It never uses EF Core directly — it always goes through the repository.'
            }
          ]
        },
        {
          id: 'data-access-layer',
          title: 'Data Access Layer (Repositories)',
          description: 'Repositories wrap the database so the rest of the app does not know (or care) about EF Core',
          keyPoints: [
            'Repositories encapsulate all database queries',
            'Return entities, not DTOs — the service decides what to expose',
            'One repository per aggregate/entity type (ProductRepository, OrderRepository)',
            'Contain NO business logic — only data access',
            'Use async methods for all database operations'
          ],
          codeExamples: [
            {
              title: 'Repository Interface',
              code: `public interface IProductRepository
{
    Task<IEnumerable<Product>> GetAllAsync();
    Task<Product?> GetByIdAsync(int id);
    Task<Product> AddAsync(Product product);
    Task UpdateAsync(Product product);
    Task DeleteAsync(Product product);
}`,
              language: 'csharp',
              explanation: 'A repository interface hides the implementation detail (EF Core, Dapper, MongoDB) from the rest of the code. Services only see this contract.'
            },
            {
              title: 'Repository Implementation',
              code: `public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _db;

    public ProductRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<Product>> GetAllAsync()
    {
        return await _db.Products.ToListAsync();
    }

    public async Task<Product?> GetByIdAsync(int id)
    {
        return await _db.Products.FindAsync(id);
    }

    public async Task<Product> AddAsync(Product product)
    {
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return product;
    }

    public async Task UpdateAsync(Product product)
    {
        _db.Products.Update(product);
        await _db.SaveChangesAsync();
    }

    public async Task DeleteAsync(Product product)
    {
        _db.Products.Remove(product);
        await _db.SaveChangesAsync();
    }
}`,
              language: 'csharp',
              explanation: 'Notice there is no logic here — just CRUD. If you later switch from EF Core to Dapper or a different database, only this file changes.'
            }
          ]
        },
        {
          id: 'dtos-vs-entities',
          title: 'DTOs vs Entities',
          description: 'Understanding why you should never return database entities directly from an API',
          keyPoints: [
            'Entity = class that maps to a database table (e.g., Product)',
            'DTO = Data Transfer Object, the shape sent over the wire (e.g., ProductDto)',
            'Entities contain navigation properties, internal IDs, sensitive data',
            'DTOs let you control exactly what the client sees',
            'Different DTOs for different operations: CreateProductDto, UpdateProductDto, ProductDto'
          ],
          codeExamples: [
            {
              title: 'Entity vs DTO',
              code: `// Entity - the database shape
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal InternalCost { get; set; }     // 🔒 Never expose!
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; }
    public int CategoryId { get; set; }
    public Category? Category { get; set; }       // Navigation property
    public List<Review> Reviews { get; set; } = new();
}

// DTO - what the API returns (safe to send to clients)
public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string? Description { get; set; }
    // InternalCost, CreatedAt, navigation props all excluded
}

// DTO - what the API accepts for creating
public class CreateProductDto
{
    [Required, StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Range(0.01, 10000)]
    public decimal Price { get; set; }

    public string? Description { get; set; }
    // No Id - server generates it
    // No CreatedAt - server sets it
    // No InternalCost - client shouldn't set this
}`,
              language: 'csharp',
              explanation: 'Entities can contain secrets (InternalCost), audit fields (CreatedAt), or huge object graphs (Reviews). DTOs let you pick exactly what crosses the API boundary.'
            },
            {
              title: 'Why You Need Separate DTOs',
              code: `// ❌ BAD: returning the entity
[HttpGet("{id}")]
public async Task<Product?> GetById(int id)
{
    return await _db.Products
        .Include(p => p.Reviews)
        .FirstOrDefaultAsync(p => p.Id == id);
}
// Problems:
// - Leaks InternalCost
// - Can cause infinite JSON loops (Product → Reviews → Product)
// - Coupling: changing the DB shape breaks the API
// - Slow: fetches data the client doesn't need

// ✅ GOOD: returning a DTO
[HttpGet("{id}")]
public async Task<ActionResult<ProductDto>> GetById(int id)
{
    var dto = await _productService.GetByIdAsync(id);
    return dto == null ? NotFound() : Ok(dto);
}
// Benefits:
// - Complete control over the response shape
// - DB schema changes don't break clients
// - Smaller payloads = faster responses
// - Different DTOs for different endpoints (ProductSummaryDto vs ProductDetailDto)`,
              language: 'csharp',
              explanation: 'Returning entities directly couples your API to your database schema and can leak sensitive data. DTOs act as a stable contract between your API and its clients.'
            }
          ],
          comparison: {
            title: 'Entity vs DTO',
            options: [
              {
                name: 'Entity',
                description: 'Maps to a database table',
                whenToUse: 'Inside repositories and services only',
                example: 'public class Product { int Id; decimal InternalCost; List<Review> Reviews; }'
              },
              {
                name: 'Read DTO',
                description: 'What the API returns',
                whenToUse: 'Response bodies sent to clients',
                example: 'public class ProductDto { int Id; string Name; decimal Price; }'
              },
              {
                name: 'Create DTO',
                description: 'What the API accepts on POST',
                whenToUse: 'Creating new resources (no Id)',
                example: 'public class CreateProductDto { string Name; decimal Price; }'
              },
              {
                name: 'Update DTO',
                description: 'What the API accepts on PUT/PATCH',
                whenToUse: 'Updating existing resources',
                example: 'public class UpdateProductDto { string Name; decimal Price; }'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'level-2-week-6',
      weekNumber: 6,
      title: 'N-Tier API Architecture (Applied)',
      description: 'Wiring up N-Tier with Dependency Injection, mapping, async flow, and testing',
      concepts: [
        {
          id: 'dependency-injection',
          title: 'Dependency Injection Across Tiers',
          description: 'Registering services and repositories so each layer can find its dependencies at runtime',
          keyPoints: [
            'Register each interface and its implementation in Program.cs',
            'Controllers receive IService, services receive IRepository — via constructor injection',
            'Three lifetimes: Singleton (one forever), Scoped (per request), Transient (every time)',
            'Use Scoped for services/repositories that touch DbContext',
            'Never "new up" a service or repository manually — let DI do it'
          ],
          codeExamples: [
            {
              title: 'Wiring Up Dependencies (Program.cs)',
              code: `var builder = WebApplication.CreateBuilder(args);

// Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Repositories (Data Access Layer)
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();

// Services (Business Logic Layer)
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IOrderService, OrderService>();

// Controllers (Presentation Layer)
builder.Services.AddControllers();

var app = builder.Build();
app.MapControllers();
app.Run();`,
              language: 'csharp',
              explanation: 'Every interface in your layered app must be registered. AddScoped means "create one instance per HTTP request, then dispose" — perfect for anything using DbContext.'
            },
            {
              title: 'Constructor Injection in Each Layer',
              code: `// Controller depends on Service (NOT DbContext, NOT Repository)
public class ProductsController : ControllerBase
{
    private readonly IProductService _service;
    public ProductsController(IProductService service) => _service = service;
}

// Service depends on Repository (NOT DbContext)
public class ProductService : IProductService
{
    private readonly IProductRepository _repository;
    public ProductService(IProductRepository repository) => _repository = repository;
}

// Repository depends on DbContext
public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _db;
    public ProductRepository(AppDbContext db) => _db = db;
}`,
              language: 'csharp',
              explanation: 'Each layer depends only on the layer directly below it via an interface. This enforces the N-Tier boundary and makes every layer independently testable with mocks.'
            },
            {
              title: 'DI Lifetimes',
              code: `// Singleton - one instance for the entire app lifetime
// Use for: stateless helpers, configuration, caches
builder.Services.AddSingleton<IEmailTemplateProvider, EmailTemplateProvider>();

// Scoped - one instance per HTTP request
// Use for: anything using DbContext (services, repositories)
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

// Transient - new instance every time it's requested
// Use for: lightweight, stateless objects
builder.Services.AddTransient<IDateTimeProvider, DateTimeProvider>();`,
              language: 'csharp',
              explanation: 'DbContext is Scoped by default, so anything that uses it must also be Scoped (or it will break). Singleton + DbContext = concurrency bugs. When in doubt, use AddScoped.'
            }
          ]
        },
        {
          id: 'end-to-end-flow',
          title: 'End-to-End Request Flow',
          description: 'Tracing an HTTP request as it flows through all three layers and back',
          keyPoints: [
            'Request comes in → Controller → Service → Repository → Database',
            'Response goes back: Entity → DTO → JSON → Client',
            'Each arrow is an interface boundary, not a concrete class',
            'Every layer handles its own concerns and hides the rest',
            'If a layer misbehaves, you can replace it without touching the others'
          ],
          codeExamples: [
            {
              title: 'POST /api/products — Full Flow',
              code: `// 1️⃣ CLIENT sends: POST /api/products
//    Body: { "name": "Laptop", "price": 999.99 }

// 2️⃣ CONTROLLER (Presentation)
[HttpPost]
public async Task<ActionResult<ProductDto>> Create(CreateProductDto dto)
{
    // [ApiController] auto-validates the DTO (400 if invalid)
    var created = await _productService.CreateAsync(dto);
    return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
}

// 3️⃣ SERVICE (Business Logic)
public async Task<ProductDto> CreateAsync(CreateProductDto dto)
{
    // Apply business rules
    var product = new Product
    {
        Name = dto.Name.Trim(),
        Price = dto.Price * 1.10m,      // 10% tax
        CreatedAt = DateTime.UtcNow      // audit field
    };

    var saved = await _repository.AddAsync(product);
    return MapToDto(saved);              // entity → DTO
}

// 4️⃣ REPOSITORY (Data Access)
public async Task<Product> AddAsync(Product product)
{
    _db.Products.Add(product);
    await _db.SaveChangesAsync();        // SQL INSERT
    return product;                      // now has DB-generated Id
}

// 5️⃣ DATABASE returns new Id

// 6️⃣ Response flows back up:
//    Repository returns Product entity
//    Service maps to ProductDto
//    Controller returns 201 Created with ProductDto as JSON
//    Client receives: { "id": 42, "name": "Laptop", "price": 1099.989 }`,
              language: 'csharp',
              explanation: 'Follow the data: request DTO → entity → DB → entity → response DTO. Notice that each layer only deals with the types it cares about. The controller never sees Product; the repository never sees ProductDto.'
            },
            {
              title: 'GET /api/products/42 — Full Flow',
              code: `// 1️⃣ CLIENT sends: GET /api/products/42

// 2️⃣ CONTROLLER
[HttpGet("{id}")]
public async Task<ActionResult<ProductDto>> GetById(int id)
{
    var dto = await _productService.GetByIdAsync(id);
    return dto == null ? NotFound() : Ok(dto);
}

// 3️⃣ SERVICE
public async Task<ProductDto?> GetByIdAsync(int id)
{
    var product = await _repository.GetByIdAsync(id);
    return product == null ? null : MapToDto(product);
}

// 4️⃣ REPOSITORY
public async Task<Product?> GetByIdAsync(int id)
{
    return await _db.Products.FindAsync(id);  // SQL SELECT
}

// Response: 200 OK with ProductDto JSON
//           OR 404 Not Found if product doesn't exist`,
              language: 'csharp',
              explanation: 'The "null flows up" pattern: repository returns null when not found → service returns null → controller returns 404. Each layer communicates results cleanly without throwing exceptions for expected cases.'
            }
          ]
        },
        {
          id: 'mapping-entities-dtos',
          title: 'Mapping Between Entities and DTOs',
          description: 'Three approaches: manual mapping, extension methods, and AutoMapper',
          keyPoints: [
            'Mapping is the translation between entity (DB) and DTO (API) shapes',
            'Manual mapping is explicit and performant but verbose',
            'Extension methods keep mapping logic beside the types',
            'AutoMapper reduces boilerplate via conventions',
            'Mapping always lives in the Service layer (or a dedicated Mapper)'
          ],
          codeExamples: [
            {
              title: 'Manual Mapping',
              code: `public class ProductService : IProductService
{
    private static ProductDto MapToDto(Product p) => new()
    {
        Id = p.Id,
        Name = p.Name,
        Price = p.Price,
        Description = p.Description
    };

    private static Product MapToEntity(CreateProductDto dto) => new()
    {
        Name = dto.Name.Trim(),
        Price = dto.Price,
        Description = dto.Description,
        CreatedAt = DateTime.UtcNow
    };

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        var product = MapToEntity(dto);
        var saved = await _repository.AddAsync(product);
        return MapToDto(saved);
    }
}`,
              language: 'csharp',
              explanation: 'Manual mapping is the simplest approach: plain C# methods. No magic, no dependencies, easy to debug. The downside is you must update both the type AND the mapper when properties change.'
            },
            {
              title: 'Extension Method Mappers',
              code: `// Mappers/ProductMappings.cs
public static class ProductMappings
{
    public static ProductDto ToDto(this Product product) => new()
    {
        Id = product.Id,
        Name = product.Name,
        Price = product.Price,
        Description = product.Description
    };

    public static Product ToEntity(this CreateProductDto dto) => new()
    {
        Name = dto.Name.Trim(),
        Price = dto.Price,
        Description = dto.Description,
        CreatedAt = DateTime.UtcNow
    };

    public static IEnumerable<ProductDto> ToDtoList(this IEnumerable<Product> products)
        => products.Select(ToDto);
}

// Service uses fluent syntax
public async Task<ProductDto> CreateAsync(CreateProductDto dto)
{
    var product = dto.ToEntity();
    var saved = await _repository.AddAsync(product);
    return saved.ToDto();
}

public async Task<IEnumerable<ProductDto>> GetAllAsync()
{
    var products = await _repository.GetAllAsync();
    return products.ToDtoList();
}`,
              language: 'csharp',
              explanation: 'Extension methods read naturally (product.ToDto()) and keep mapping logic in one file. A great middle ground between verbose manual mapping and auto-magic libraries.'
            },
            {
              title: 'AutoMapper',
              code: `// 1. Install: dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

// 2. Create a profile
public class ProductProfile : Profile
{
    public ProductProfile()
    {
        CreateMap<Product, ProductDto>();
        CreateMap<CreateProductDto, Product>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.UtcNow));
        CreateMap<UpdateProductDto, Product>();
    }
}

// 3. Register in Program.cs
builder.Services.AddAutoMapper(typeof(Program));

// 4. Inject IMapper and use it
public class ProductService : IProductService
{
    private readonly IProductRepository _repository;
    private readonly IMapper _mapper;

    public ProductService(IProductRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        var product = _mapper.Map<Product>(dto);
        var saved = await _repository.AddAsync(product);
        return _mapper.Map<ProductDto>(saved);
    }

    public async Task<IEnumerable<ProductDto>> GetAllAsync()
    {
        var products = await _repository.GetAllAsync();
        return _mapper.Map<IEnumerable<ProductDto>>(products);
    }
}`,
              language: 'csharp',
              explanation: 'AutoMapper uses conventions (matching property names) to generate mappings at runtime. Saves a lot of boilerplate for large APIs, but adds a dependency and can hide bugs if properties silently don\'t match.'
            }
          ],
          comparison: {
            title: 'Mapping Approaches',
            options: [
              {
                name: 'Manual (private method)',
                description: 'Plain static method that copies properties',
                whenToUse: 'Small projects, maximum clarity, easy debugging',
                example: 'private static ProductDto MapToDto(Product p) => new() { ... };'
              },
              {
                name: 'Extension Methods',
                description: 'Static mapper class with extension methods',
                whenToUse: 'Medium projects, fluent syntax, keep mapping beside types',
                example: 'product.ToDto(); dto.ToEntity();'
              },
              {
                name: 'AutoMapper',
                description: 'Convention-based mapping library',
                whenToUse: 'Large APIs with many similar DTOs',
                example: '_mapper.Map<ProductDto>(product);'
              },
              {
                name: 'Mapperly (source-generated)',
                description: 'Compile-time generated mappers (newer alternative)',
                whenToUse: 'Need AutoMapper-style syntax with zero runtime cost',
                example: '[Mapper] public partial class ProductMapper { ... }'
              }
            ]
          }
        },
        {
          id: 'testing-layers',
          title: 'Testing Each Layer',
          description: 'How N-Tier makes unit testing dramatically easier with mocks',
          keyPoints: [
            'Each layer depends on an interface, so tests can mock the layer below',
            'Test services by mocking repositories — no database needed',
            'Test controllers by mocking services — no HTTP needed',
            'Integration tests use the real stack with an in-memory DB',
            'Use Moq, NSubstitute, or FakeItEasy for mocking'
          ],
          codeExamples: [
            {
              title: 'Unit Testing a Service (with Moq)',
              code: `// dotnet add package Moq
// dotnet add package xunit

public class ProductServiceTests
{
    [Fact]
    public async Task CreateAsync_AppliesTenPercentTax()
    {
        // Arrange - mock the repository
        var mockRepo = new Mock<IProductRepository>();
        mockRepo
            .Setup(r => r.AddAsync(It.IsAny<Product>()))
            .ReturnsAsync((Product p) => p);

        var service = new ProductService(mockRepo.Object);

        var dto = new CreateProductDto { Name = "Laptop", Price = 100m };

        // Act
        var result = await service.CreateAsync(dto);

        // Assert - business rule applied
        Assert.Equal(110m, result.Price);
        mockRepo.Verify(r => r.AddAsync(It.IsAny<Product>()), Times.Once);
    }

    [Fact]
    public async Task GetByIdAsync_ReturnsNull_WhenNotFound()
    {
        var mockRepo = new Mock<IProductRepository>();
        mockRepo.Setup(r => r.GetByIdAsync(42)).ReturnsAsync((Product?)null);
        var service = new ProductService(mockRepo.Object);

        var result = await service.GetByIdAsync(42);

        Assert.Null(result);
    }
}`,
              language: 'csharp',
              explanation: 'Because ProductService depends on IProductRepository (an interface), we can replace it with a Mock in tests. No database, no HTTP — just pure C# testing the business logic in isolation.'
            },
            {
              title: 'Unit Testing a Controller',
              code: `public class ProductsControllerTests
{
    [Fact]
    public async Task GetById_ReturnsNotFound_WhenProductMissing()
    {
        // Arrange - mock the service
        var mockService = new Mock<IProductService>();
        mockService.Setup(s => s.GetByIdAsync(99)).ReturnsAsync((ProductDto?)null);

        var controller = new ProductsController(mockService.Object);

        // Act
        var result = await controller.GetById(99);

        // Assert
        Assert.IsType<NotFoundResult>(result.Result);
    }

    [Fact]
    public async Task GetById_ReturnsOk_WhenProductExists()
    {
        var dto = new ProductDto { Id = 1, Name = "Laptop", Price = 999m };
        var mockService = new Mock<IProductService>();
        mockService.Setup(s => s.GetByIdAsync(1)).ReturnsAsync(dto);

        var controller = new ProductsController(mockService.Object);

        var result = await controller.GetById(1);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returned = Assert.IsType<ProductDto>(okResult.Value);
        Assert.Equal("Laptop", returned.Name);
    }
}`,
              language: 'csharp',
              explanation: 'Controller tests mock IProductService and verify the right HTTP response is returned. These tests run in milliseconds — no server, no database, no network.'
            }
          ]
        },
        {
          id: 'n-tier-best-practices',
          title: 'N-Tier Best Practices',
          description: 'Rules of thumb to keep your layered architecture clean as the project grows',
          keyPoints: [
            'Dependencies flow DOWN only — never let a repository call a service',
            'Controllers should be "dumb" — no business logic, no mapping',
            'Never return entities from a controller — always DTOs',
            'Each layer gets an interface so it can be swapped or mocked',
            'One repository per aggregate root, one service per use case',
            'Keep namespaces/folders aligned with layers for discoverability'
          ],
          codeExamples: [
            {
              title: 'Do This',
              code: `// ✅ Controller → Service → Repository → DbContext
public class OrdersController(IOrderService service) : ControllerBase { }
public class OrderService(IOrderRepository repo, IProductRepository productRepo) : IOrderService { }
public class OrderRepository(AppDbContext db) : IOrderRepository { }

// ✅ A service CAN use multiple repositories
public async Task<OrderDto> CreateAsync(CreateOrderDto dto)
{
    var product = await _productRepo.GetByIdAsync(dto.ProductId);
    if (product == null) throw new NotFoundException();

    var order = new Order { ProductId = product.Id, Quantity = dto.Quantity };
    await _orderRepo.AddAsync(order);
    return order.ToDto();
}

// ✅ Validation attributes on DTOs
public class CreateOrderDto
{
    [Required] public int ProductId { get; set; }
    [Range(1, 1000)] public int Quantity { get; set; }
}`,
              language: 'csharp',
              explanation: 'Services can orchestrate multiple repositories — that is exactly what they are for. Controllers stay thin and validation stays on DTOs.'
            },
            {
              title: "Don't Do This",
              code: `// ❌ Controller skipping the service
[HttpGet]
public async Task<IActionResult> GetAll([FromServices] AppDbContext db)
{
    return Ok(await db.Products.ToListAsync()); // leaks entity, no business logic
}

// ❌ Repository calling a service (dependency flowing UP)
public class ProductRepository(IEmailService emailService) : IProductRepository
{
    public async Task<Product> AddAsync(Product p)
    {
        await emailService.SendAsync("Product created"); // WRONG layer!
        // ...
    }
}

// ❌ Business logic in the controller
[HttpPost]
public async Task<IActionResult> Create(CreateProductDto dto)
{
    if (dto.Price < 0) return BadRequest(); // Should be validation attribute
    var p = new Product { Name = dto.Name, Price = dto.Price * 1.10m }; // tax in controller!
    _db.Products.Add(p);                                                 // DB access in controller!
    await _db.SaveChangesAsync();
    return Ok(p); // returning entity!
}

// ❌ Shared repository that does "everything"
public interface IGenericRepository
{
    Task<T> GetAsync<T>(int id);
    Task SaveAsync<T>(T entity);
    // Too generic - harder to test and reason about
}`,
              language: 'csharp',
              explanation: 'The common anti-patterns: skipping layers, putting logic in the wrong layer, and creating "god" repositories. Watch for these as your codebase grows — they erode the architecture quickly.'
            }
          ]
        }
      ]
    }
  ]
};
