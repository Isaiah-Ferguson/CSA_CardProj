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

export interface WeeklyConcept {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  date: string;
  concepts: Concept[];
}

export const weeklyConcepts: WeeklyConcept[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'EF Core Navigation & API Return Types',
    description: 'Deep dive into Entity Framework Core navigation properties, API return types, and collection interfaces',
    date: 'March 2026',
    concepts: [
      {
        id: 'ef-core-navigation',
        title: 'Navigation Properties in EF Core',
        description: 'Understanding how to define and use navigation properties to represent relationships between entities',
        keyPoints: [
          'Navigation properties allow you to navigate from one entity to related entities',
          'Can be collection navigation properties (one-to-many) or reference navigation properties (one-to-one, many-to-one)',
          'EF Core uses navigation properties to understand relationships and generate proper foreign keys',
          'Lazy loading, eager loading, and explicit loading control when related data is retrieved'
        ],
        codeExamples: [
          {
            title: 'One-to-Many Relationship',
            code: `public class Blog
{
    public int BlogId { get; set; }
    public string Name { get; set; }
    
    // Collection navigation property
    public ICollection<Post> Posts { get; set; }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public int BlogId { get; set; }
    
    // Reference navigation property
    public Blog Blog { get; set; }
}`,
            language: 'csharp',
            explanation: 'A Blog has many Posts (collection navigation), and each Post belongs to one Blog (reference navigation). EF Core will automatically create the BlogId foreign key.'
          },
          {
            title: 'Eager Loading with Include',
            code: `// Load blogs with their posts
var blogs = await context.Blogs
    .Include(b => b.Posts)
    .ToListAsync();

// Load posts with their blog
var posts = await context.Posts
    .Include(p => p.Blog)
    .ToListAsync();`,
            language: 'csharp',
            explanation: 'Use Include() to eagerly load related data in a single query. This prevents the N+1 query problem.'
          },
          {
            title: 'Many-to-Many Relationship',
            code: `public class Student
{
    public int StudentId { get; set; }
    public string Name { get; set; }
    public ICollection<Course> Courses { get; set; }
}

public class Course
{
    public int CourseId { get; set; }
    public string Title { get; set; }
    public ICollection<Student> Students { get; set; }
}

// EF Core 5+ automatically creates join table
var student = await context.Students
    .Include(s => s.Courses)
    .FirstOrDefaultAsync(s => s.StudentId == id);`,
            language: 'csharp',
            explanation: 'EF Core 5+ supports many-to-many relationships without explicitly defining a join entity. It creates the join table automatically.'
          }
        ]
      },
      {
        id: 'action-result-vs-iaction-result',
        title: 'ActionResult<T> vs IActionResult',
        description: 'Choosing the right return type for your API controller actions',
        keyPoints: [
          'IActionResult is the base interface for all action results',
          'ActionResult<T> provides type safety and better documentation',
          'ActionResult<T> allows returning either T or IActionResult',
          'Use ActionResult<T> for better API documentation and type inference'
        ],
        codeExamples: [
          {
            title: 'Using IActionResult',
            code: `[HttpGet("{id}")]
public IActionResult GetProduct(int id)
{
    var product = _context.Products.Find(id);
    
    if (product == null)
        return NotFound();
    
    return Ok(product); // Must wrap in Ok()
}`,
            language: 'csharp',
            explanation: 'IActionResult is flexible but requires wrapping the result in Ok(), NotFound(), etc. The return type is not strongly typed.'
          },
          {
            title: 'Using ActionResult<T>',
            code: `[HttpGet("{id}")]
public ActionResult<Product> GetProduct(int id)
{
    var product = _context.Products.Find(id);
    
    if (product == null)
        return NotFound();
    
    return product; // Can return T directly or IActionResult
}`,
            language: 'csharp',
            explanation: 'ActionResult<T> provides type safety. You can return the object directly (implicit Ok()) or return status codes like NotFound(). API documentation tools can infer the return type.'
          },
          {
            title: 'Multiple Return Types',
            code: `[HttpPost]
[ProducesResponseType(StatusCodes.Status201Created)]
[ProducesResponseType(StatusCodes.Status400BadRequest)]
public ActionResult<Product> CreateProduct(Product product)
{
    if (!ModelState.IsValid)
        return BadRequest(ModelState);
    
    _context.Products.Add(product);
    _context.SaveChanges();
    
    return CreatedAtAction(
        nameof(GetProduct),
        new { id = product.Id },
        product
    );
}`,
            language: 'csharp',
            explanation: 'ActionResult<T> works seamlessly with different status codes. Use ProducesResponseType attributes to document all possible responses.'
          }
        ],
        comparison: {
          title: 'When to Use Each',
          options: [
            {
              name: 'IActionResult',
              description: 'Base interface for all action results',
              whenToUse: 'When you need maximum flexibility or return different types from the same action',
              example: 'Actions that might return different object types based on conditions'
            },
            {
              name: 'ActionResult<T>',
              description: 'Generic wrapper providing type safety',
              whenToUse: 'Most API endpoints - provides better documentation and type safety',
              example: 'Standard CRUD operations where you know the return type'
            }
          ]
        }
      },
      {
        id: 'collections-comparison',
        title: 'List vs IEnumerable vs ICollection',
        description: 'Understanding collection interfaces and when to use each in your APIs',
        keyPoints: [
          'IEnumerable<T> is read-only and supports iteration only',
          'ICollection<T> adds Count and modification methods (Add, Remove)',
          'List<T> is a concrete implementation with indexing and more features',
          'Choose based on your API contract and performance needs'
        ],
        codeExamples: [
          {
            title: 'IEnumerable<T> - Deferred Execution',
            code: `[HttpGet]
public IEnumerable<Product> GetProducts()
{
    // Query is not executed yet
    return _context.Products
        .Where(p => p.IsActive)
        .Select(p => new Product 
        { 
            Id = p.Id, 
            Name = p.Name 
        });
    // Query executes when enumerated
}`,
            language: 'csharp',
            explanation: 'IEnumerable supports deferred execution. The query only runs when the result is enumerated. Good for streaming large datasets.'
          },
          {
            title: 'ICollection<T> - For Navigation Properties',
            code: `public class Order
{
    public int OrderId { get; set; }
    
    // Use ICollection for EF Core navigation properties
    public ICollection<OrderItem> Items { get; set; }
}

// In your API
[HttpGet("{id}")]
public async Task<ActionResult<Order>> GetOrder(int id)
{
    var order = await _context.Orders
        .Include(o => o.Items)
        .FirstOrDefaultAsync(o => o.OrderId == id);
    
    return order;
}`,
            language: 'csharp',
            explanation: 'ICollection is the standard for EF Core navigation properties. It allows EF to track changes and supports Add/Remove operations.'
          },
          {
            title: 'List<T> - Concrete Implementation',
            code: `[HttpGet]
public async Task<ActionResult<List<Product>>> GetProducts()
{
    // ToListAsync() executes query immediately
    var products = await _context.Products
        .Where(p => p.IsActive)
        .ToListAsync();
    
    // Can manipulate the list
    products.RemoveAll(p => p.Stock == 0);
    
    return products;
}`,
            language: 'csharp',
            explanation: 'List<T> executes the query immediately and loads all data into memory. Provides indexing and full list manipulation.'
          }
        ],
        comparison: {
          title: 'Collection Interface Comparison',
          options: [
            {
              name: 'IEnumerable<T>',
              description: 'Read-only, forward-only iteration',
              whenToUse: 'Streaming data, deferred execution, or when you only need to iterate once',
              example: 'Large datasets, LINQ queries that should execute on the database'
            },
            {
              name: 'ICollection<T>',
              description: 'Adds Count, Add, Remove, Clear',
              whenToUse: 'EF Core navigation properties, when you need to modify the collection',
              example: 'Entity relationships, collections that need to be modified'
            },
            {
              name: 'List<T>',
              description: 'Concrete class with indexing and sorting',
              whenToUse: 'When you need indexing, sorting, or full list features',
              example: 'Small datasets that need manipulation, in-memory operations'
            }
          ]
        }
      },
      {
        id: 'created-at-action',
        title: 'CreatedAtAction for RESTful APIs',
        description: 'Properly returning created resources with location headers',
        keyPoints: [
          'Returns HTTP 201 Created status code',
          'Includes Location header pointing to the new resource',
          'Follows REST best practices for POST endpoints',
          'Requires a GET action to reference for the location'
        ],
        codeExamples: [
          {
            title: 'Basic CreatedAtAction',
            code: `[HttpPost]
public ActionResult<Product> CreateProduct(Product product)
{
    _context.Products.Add(product);
    _context.SaveChanges();
    
    return CreatedAtAction(
        nameof(GetProduct),        // Name of GET action
        new { id = product.Id },   // Route values
        product                     // Response body
    );
}

[HttpGet("{id}")]
public ActionResult<Product> GetProduct(int id)
{
    var product = _context.Products.Find(id);
    return product == null ? NotFound() : product;
}`,
            language: 'csharp',
            explanation: 'CreatedAtAction returns 201 Created with a Location header like "https://api.example.com/api/products/5". The client knows where to find the new resource.'
          },
          {
            title: 'With Route Name',
            code: `[HttpPost]
public async Task<ActionResult<Product>> CreateProduct(Product product)
{
    _context.Products.Add(product);
    await _context.SaveChangesAsync();
    
    return CreatedAtRoute(
        "GetProduct",              // Route name
        new { id = product.Id },
        product
    );
}

[HttpGet("{id}", Name = "GetProduct")]
public ActionResult<Product> GetProduct(int id)
{
    var product = _context.Products.Find(id);
    return product == null ? NotFound() : product;
}`,
            language: 'csharp',
            explanation: 'CreatedAtRoute uses a named route instead of action name. Useful when you have multiple routes to the same action.'
          },
          {
            title: 'Complete CRUD Example',
            code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public ProductsController(AppDbContext context)
    {
        _context = context;
    }
    
    [HttpPost]
    public async Task<ActionResult<Product>> Create(Product product)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction(
            nameof(GetById),
            new { id = product.Id },
            product
        );
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var product = await _context.Products.FindAsync(id);
        
        if (product == null)
            return NotFound();
        
        return product;
    }
}`,
            language: 'csharp',
            explanation: 'Complete example showing POST returning 201 Created with location header, and GET endpoint that the location points to.'
          }
        ]
      },
      {
        id: 'key-attribute',
        title: '[Key] Attribute in EF Core',
        description: 'Explicitly defining primary keys when EF Core conventions do not apply',
        keyPoints: [
          'EF Core automatically recognizes properties named "Id" or "{ClassName}Id" as primary keys',
          'Use [Key] attribute when your primary key has a different name',
          'Can be applied to any property to designate it as the primary key',
          'Essential for legacy databases or non-standard naming conventions'
        ],
        codeExamples: [
          {
            title: 'Standard Convention (No [Key] Needed)',
            code: `public class Product
{
    // EF Core automatically recognizes this as primary key
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

public class Order
{
    // Also recognized: ClassName + Id
    public int OrderId { get; set; }
    public DateTime OrderDate { get; set; }
}`,
            language: 'csharp',
            explanation: 'EF Core conventions automatically identify "Id" or "OrderId" as primary keys. No attribute needed.'
          },
          {
            title: 'Using [Key] for Non-Standard Names',
            code: `using System.ComponentModel.DataAnnotations;

public class Employee
{
    [Key]
    public int EmployeeNumber { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Department { get; set; }
}

public class Customer
{
    [Key]
    public string EmailAddress { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
}`,
            language: 'csharp',
            explanation: 'When your primary key has a non-standard name like "EmployeeNumber" or is a string like "EmailAddress", use [Key] to explicitly mark it.'
          },
          {
            title: 'Composite Keys with Fluent API',
            code: `public class StudentCourse
{
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public DateTime EnrollmentDate { get; set; }
    
    public Student Student { get; set; }
    public Course Course { get; set; }
}

// In DbContext OnModelCreating
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<StudentCourse>()
        .HasKey(sc => new { sc.StudentId, sc.CourseId });
}`,
            language: 'csharp',
            explanation: 'For composite keys (multiple columns), use Fluent API in OnModelCreating. The [Key] attribute cannot be used for composite keys.'
          },
          {
            title: 'Complete Example with [Key]',
            code: `[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public EmployeesController(AppDbContext context)
    {
        _context = context;
    }
    
    [HttpGet("{employeeNumber}")]
    public async Task<ActionResult<Employee>> GetEmployee(int employeeNumber)
    {
        // EF Core knows EmployeeNumber is the key
        var employee = await _context.Employees
            .FindAsync(employeeNumber);
        
        if (employee == null)
            return NotFound();
        
        return employee;
    }
}`,
            language: 'csharp',
            explanation: 'Once [Key] is applied, EF Core treats that property as the primary key for all operations including Find(), Update(), and Delete().'
          }
        ],
        comparison: {
          title: 'When to Use [Key]',
          options: [
            {
              name: 'Use Convention',
              description: 'Let EF Core auto-detect with "Id" or "{ClassName}Id"',
              whenToUse: 'New projects where you control the database design',
              example: 'public int Id { get; set; } or public int ProductId { get; set; }'
            },
            {
              name: 'Use [Key] Attribute',
              description: 'Explicitly mark non-standard primary key names',
              whenToUse: 'Legacy databases, specific naming requirements, or non-integer keys',
              example: '[Key] public string EmailAddress { get; set; }'
            },
            {
              name: 'Use Fluent API',
              description: 'Configure keys in OnModelCreating method',
              whenToUse: 'Composite keys, complex configurations, or when you prefer centralized configuration',
              example: 'HasKey(e => new { e.StudentId, e.CourseId })'
            }
          ]
        }
      },
      {
        id: 'as-no-tracking',
        title: 'AsNoTracking()',
        description: 'Improving performance by disabling change tracking for read-only scenarios',
        keyPoints: [
          'EF Core tracks entities by default to detect changes for SaveChanges()',
          'AsNoTracking() disables change tracking for better performance',
          'Use for read-only queries where you will not modify the data',
          'Significantly reduces memory usage and improves query speed',
          'Tracked entities cannot be updated or deleted without re-attaching'
        ],
        codeExamples: [
          {
            title: 'Default Tracking Behavior',
            code: `[HttpGet]
public async Task<ActionResult<List<Product>>> GetProducts()
{
    // Default: EF Core tracks all entities
    var products = await _context.Products
        .Where(p => p.IsActive)
        .ToListAsync();
    
    // These entities are tracked in the context
    // Memory overhead for change tracking
    return products;
}`,
            language: 'csharp',
            explanation: 'By default, EF Core tracks all queried entities. This uses memory to store original values and detect changes when SaveChanges() is called.'
          },
          {
            title: 'Using AsNoTracking() for Read-Only',
            code: `[HttpGet]
public async Task<ActionResult<List<Product>>> GetProducts()
{
    // No tracking: Better performance
    var products = await _context.Products
        .AsNoTracking()
        .Where(p => p.IsActive)
        .ToListAsync();
    
    // These entities are NOT tracked
    // Lower memory usage, faster queries
    return products;
}`,
            language: 'csharp',
            explanation: 'AsNoTracking() tells EF Core not to track these entities. Perfect for read-only API endpoints that just return data.'
          },
          {
            title: 'AsNoTracking() with Includes',
            code: `[HttpGet("{id}")]
public async Task<ActionResult<Order>> GetOrderDetails(int id)
{
    var order = await _context.Orders
        .AsNoTracking()
        .Include(o => o.Customer)
        .Include(o => o.OrderItems)
            .ThenInclude(oi => oi.Product)
        .FirstOrDefaultAsync(o => o.OrderId == id);
    
    if (order == null)
        return NotFound();
    
    return order;
}`,
            language: 'csharp',
            explanation: 'AsNoTracking() works with Include() for related data. All entities (Order, Customer, OrderItems, Products) are not tracked, improving performance for complex queries.'
          },
          {
            title: 'When NOT to Use AsNoTracking()',
            code: `[HttpPut("{id}")]
public async Task<IActionResult> UpdateProduct(int id, Product product)
{
    // DON'T use AsNoTracking here!
    var existingProduct = await _context.Products
        .FindAsync(id); // Tracked by default
    
    if (existingProduct == null)
        return NotFound();
    
    // Update properties
    existingProduct.Name = product.Name;
    existingProduct.Price = product.Price;
    
    // SaveChanges detects changes because entity is tracked
    await _context.SaveChangesAsync();
    
    return NoContent();
}`,
            language: 'csharp',
            explanation: 'Do NOT use AsNoTracking() when you need to update or delete entities. EF Core needs to track changes to generate proper UPDATE/DELETE SQL.'
          },
          {
            title: 'Global Query Filter with AsNoTracking',
            code: `// In DbContext
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    // Make AsNoTracking the default for all queries
    optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
}

// In your controller
[HttpGet]
public async Task<ActionResult<List<Product>>> GetProducts()
{
    // Already no-tracking by default
    var products = await _context.Products.ToListAsync();
    return products;
}

[HttpPut("{id}")]
public async Task<IActionResult> UpdateProduct(int id, Product product)
{
    // Explicitly enable tracking when needed
    var existingProduct = await _context.Products
        .AsTracking()
        .FirstOrDefaultAsync(p => p.Id == id);
    
    // Update and save...
}`,
            language: 'csharp',
            explanation: 'You can set AsNoTracking as the default behavior for your entire DbContext. Use AsTracking() to explicitly enable tracking when needed for updates.'
          }
        ],
        comparison: {
          title: 'Tracking vs No Tracking',
          options: [
            {
              name: 'Default Tracking',
              description: 'EF Core tracks entities and detects changes',
              whenToUse: 'When you need to update or delete entities',
              example: 'PUT, PATCH, DELETE endpoints that modify data'
            },
            {
              name: 'AsNoTracking()',
              description: 'Disables change tracking for better performance',
              whenToUse: 'Read-only GET endpoints that just return data',
              example: 'GET endpoints, reports, data exports, search results'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Circular References & DTOs',
    description: 'Understanding and solving reserialization issues with EF Core navigation properties using Data Transfer Objects',
    date: 'March 2026',
    concepts: [
      {
        id: 'circular-reference-problem',
        title: 'Circular Reference Problem',
        description: 'Understanding why inverse navigation properties cause JSON serialization errors',
        keyPoints: [
          'Inverse navigation properties create circular references between entities',
          'JSON serializers cannot handle infinite loops by default',
          'Including related entities with .Include() exposes the circular reference',
          'The error "A possible object cycle was detected" is common with navigation properties',
          'This is a fundamental issue when returning entities directly from APIs'
        ],
        codeExamples: [
          {
            title: 'The Problem: Circular Reference',
            code: `public class Blog
{
    public int BlogId { get; set; }
    public string Name { get; set; }
    
    // Navigation property
    public ICollection<Post> Posts { get; set; }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public int BlogId { get; set; }
    
    // Inverse navigation property - creates circular reference!
    public Blog Blog { get; set; }
}

// This will cause a serialization error!
[HttpGet("{id}")]
public async Task<ActionResult<Blog>> GetBlog(int id)
{
    var blog = await _context.Blogs
        .Include(b => b.Posts) // Posts include Blog reference
        .FirstOrDefaultAsync(b => b.BlogId == id);
    
    return blog; // ERROR: Circular reference detected!
    // Blog -> Posts -> Blog -> Posts -> Blog...
}`,
            language: 'csharp',
            explanation: 'When you include Posts, each Post has a Blog reference back to the parent. The JSON serializer tries to serialize Blog -> Posts -> Blog -> Posts infinitely, causing an error.'
          },
          {
            title: 'The Error You Will See',
            code: `// System.Text.Json error:
JsonException: A possible object cycle was detected which is not 
supported. This can either be due to a cycle or if the object 
depth is larger than the maximum allowed depth of 32.

// Or with Newtonsoft.Json:
JsonSerializationException: Self referencing loop detected for 
property 'Blog' with type 'MyApp.Models.Blog'.`,
            language: 'plaintext',
            explanation: 'These are the common errors you will encounter when trying to serialize entities with circular references. The serializer detects the infinite loop and throws an exception.'
          },
          {
            title: 'Why This Happens',
            code: `// When EF Core loads this:
var blog = _context.Blogs.Include(b => b.Posts).First();

// You get this structure in memory:
Blog {
    BlogId = 1,
    Name = "My Blog",
    Posts = [
        Post {
            PostId = 1,
            Title = "First Post",
            BlogId = 1,
            Blog = [Circular Reference to Blog above]
        },
        Post {
            PostId = 2,
            Title = "Second Post",
            BlogId = 1,
            Blog = [Circular Reference to Blog above]
        }
    ]
}

// JSON serializer tries to convert this to JSON and gets stuck!`,
            language: 'csharp',
            explanation: 'EF Core creates bidirectional references in memory. Each Post object has a reference back to the parent Blog, creating a circular structure that JSON cannot serialize.'
          },
          {
            title: 'Bad Solution: ReferenceHandler.Preserve',
            code: `// In Program.cs - DON'T DO THIS!
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = 
            ReferenceHandler.Preserve;
    });

// This "works" but produces ugly JSON:
{
    "$id": "1",
    "blogId": 1,
    "name": "My Blog",
    "posts": {
        "$id": "2",
        "$values": [
            {
                "$id": "3",
                "postId": 1,
                "title": "First Post",
                "blog": { "$ref": "1" }
            }
        ]
    }
}`,
            language: 'csharp',
            explanation: 'ReferenceHandler.Preserve adds metadata ($id, $ref) to track references. This "solves" the error but creates messy JSON that is hard to consume. This is NOT the recommended solution.'
          }
        ]
      },
      {
        id: 'dto-pattern',
        title: 'DTO Pattern (Data Transfer Objects)',
        description: 'Using DTOs to control exactly what data is sent to clients and avoid circular references',
        keyPoints: [
          'DTOs are simple classes designed specifically for data transfer',
          'DTOs contain only the properties you want to expose to the client',
          'DTOs break the circular reference by not including inverse navigation properties',
          'DTOs provide a clean separation between your database models and API responses',
          'DTOs allow you to shape data exactly how your frontend needs it'
        ],
        codeExamples: [
          {
            title: 'Creating DTOs',
            code: `// DTOs - Simple classes for data transfer
public class BlogDto
{
    public int BlogId { get; set; }
    public string Name { get; set; }
    public List<PostDto> Posts { get; set; }
}

public class PostDto
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishedDate { get; set; }
    // Notice: NO Blog property! This breaks the circular reference
}

// For single post responses
public class PostDetailDto
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishedDate { get; set; }
    public string BlogName { get; set; } // Just the name, not the whole Blog
    public int BlogId { get; set; }
}`,
            language: 'csharp',
            explanation: 'DTOs are plain classes that define the exact structure you want to return. They do not include navigation properties that would cause circular references.'
          },
          {
            title: 'Manual Mapping to DTOs',
            code: `[HttpGet("{id}")]
public async Task<ActionResult<BlogDto>> GetBlog(int id)
{
    var blog = await _context.Blogs
        .Include(b => b.Posts)
        .FirstOrDefaultAsync(b => b.BlogId == id);
    
    if (blog == null)
        return NotFound();
    
    // Manual mapping to DTO
    var blogDto = new BlogDto
    {
        BlogId = blog.BlogId,
        Name = blog.Name,
        Posts = blog.Posts.Select(p => new PostDto
        {
            PostId = p.PostId,
            Title = p.Title,
            Content = p.Content,
            PublishedDate = p.PublishedDate
            // No Blog property - circular reference broken!
        }).ToList()
    };
    
    return blogDto; // Clean JSON, no circular reference!
}`,
            language: 'csharp',
            explanation: 'Manually map your entities to DTOs. This gives you complete control and breaks the circular reference by not including the Blog property in PostDto.'
          },
          {
            title: 'Using AutoMapper',
            code: `// Install: dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

// Create mapping profile
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Blog, BlogDto>();
        CreateMap<Post, PostDto>();
        CreateMap<Post, PostDetailDto>()
            .ForMember(dest => dest.BlogName, 
                opt => opt.MapFrom(src => src.Blog.Name));
    }
}

// In Program.cs
builder.Services.AddAutoMapper(typeof(MappingProfile));

// In your controller
private readonly IMapper _mapper;

public BlogsController(AppDbContext context, IMapper mapper)
{
    _context = context;
    _mapper = mapper;
}

[HttpGet("{id}")]
public async Task<ActionResult<BlogDto>> GetBlog(int id)
{
    var blog = await _context.Blogs
        .Include(b => b.Posts)
        .FirstOrDefaultAsync(b => b.BlogId == id);
    
    if (blog == null)
        return NotFound();
    
    // AutoMapper handles the mapping automatically
    var blogDto = _mapper.Map<BlogDto>(blog);
    
    return blogDto;
}`,
            language: 'csharp',
            explanation: 'AutoMapper automates the mapping process. Define mapping rules once in a Profile, then use _mapper.Map<T>() to convert entities to DTOs. Much cleaner for large projects.'
          },
          {
            title: 'Projection with Select (Best Performance)',
            code: `[HttpGet("{id}")]
public async Task<ActionResult<BlogDto>> GetBlog(int id)
{
    // Project directly to DTO in the query
    var blogDto = await _context.Blogs
        .Where(b => b.BlogId == id)
        .Select(b => new BlogDto
        {
            BlogId = b.BlogId,
            Name = b.Name,
            Posts = b.Posts.Select(p => new PostDto
            {
                PostId = p.PostId,
                Title = p.Title,
                Content = p.Content,
                PublishedDate = p.PublishedDate
            }).ToList()
        })
        .FirstOrDefaultAsync();
    
    if (blogDto == null)
        return NotFound();
    
    return blogDto;
}`,
            language: 'csharp',
            explanation: 'Use Select() to project directly to DTOs in the database query. This is the most efficient approach - EF Core only queries the columns you need, and you avoid loading unnecessary data.'
          },
          {
            title: 'Complete CRUD Example with DTOs',
            code: `[ApiController]
[Route("api/[controller]")]
public class BlogsController : ControllerBase
{
    private readonly AppDbContext _context;
    
    [HttpGet]
    public async Task<ActionResult<List<BlogDto>>> GetBlogs()
    {
        return await _context.Blogs
            .Select(b => new BlogDto
            {
                BlogId = b.BlogId,
                Name = b.Name,
                Posts = b.Posts.Select(p => new PostDto
                {
                    PostId = p.PostId,
                    Title = p.Title,
                    Content = p.Content,
                    PublishedDate = p.PublishedDate
                }).ToList()
            })
            .ToListAsync();
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<BlogDto>> GetBlog(int id)
    {
        var blogDto = await _context.Blogs
            .Where(b => b.BlogId == id)
            .Select(b => new BlogDto
            {
                BlogId = b.BlogId,
                Name = b.Name,
                Posts = b.Posts.Select(p => new PostDto
                {
                    PostId = p.PostId,
                    Title = p.Title,
                    Content = p.Content,
                    PublishedDate = p.PublishedDate
                }).ToList()
            })
            .FirstOrDefaultAsync();
        
        if (blogDto == null)
            return NotFound();
        
        return blogDto;
    }
    
    [HttpPost]
    public async Task<ActionResult<BlogDto>> CreateBlog(CreateBlogDto dto)
    {
        var blog = new Blog
        {
            Name = dto.Name
        };
        
        _context.Blogs.Add(blog);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction(
            nameof(GetBlog),
            new { id = blog.BlogId },
            new BlogDto
            {
                BlogId = blog.BlogId,
                Name = blog.Name,
                Posts = new List<PostDto>()
            }
        );
    }
}`,
            language: 'csharp',
            explanation: 'Complete example showing how to use DTOs for all CRUD operations. Notice how we always return DTOs, never entities directly.'
          }
        ],
        comparison: {
          title: 'DTO Approaches Comparison',
          options: [
            {
              name: 'Manual Mapping',
              description: 'Manually create DTO instances and map properties',
              whenToUse: 'Small projects, simple mappings, or when you need full control',
              example: 'var dto = new BlogDto { BlogId = blog.BlogId, Name = blog.Name };'
            },
            {
              name: 'AutoMapper',
              description: 'Automated mapping with configuration profiles',
              whenToUse: 'Large projects with many entities, complex mappings, or team projects',
              example: 'var dto = _mapper.Map<BlogDto>(blog);'
            },
            {
              name: 'Select Projection',
              description: 'Project to DTOs directly in LINQ queries',
              whenToUse: 'Best performance - only queries needed columns from database',
              example: '.Select(b => new BlogDto { BlogId = b.BlogId, Name = b.Name })'
            }
          ]
        }
      },
      {
        id: 'dto-best-practices',
        title: 'DTO Best Practices',
        description: 'Organizing and structuring DTOs for maintainable APIs',
        keyPoints: [
          'Create separate DTOs for different operations (Get, Create, Update)',
          'Use meaningful names: BlogDto, CreateBlogDto, UpdateBlogDto',
          'Keep DTOs in a separate folder/namespace (e.g., DTOs or Models/DTOs)',
          'DTOs should be simple POCOs with no logic',
          'Use data annotations for validation on input DTOs'
        ],
        codeExamples: [
          {
            title: 'Organizing DTOs by Operation',
            code: `// DTOs/BlogDtos.cs
namespace MyApi.DTOs;

// For GET requests - reading data
public class BlogDto
{
    public int BlogId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public List<PostSummaryDto> Posts { get; set; }
}

// For POST requests - creating new blogs
public class CreateBlogDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [StringLength(500)]
    public string Description { get; set; }
}

// For PUT requests - updating existing blogs
public class UpdateBlogDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [StringLength(500)]
    public string Description { get; set; }
}

// Lightweight DTO for lists
public class BlogSummaryDto
{
    public int BlogId { get; set; }
    public string Name { get; set; }
    public int PostCount { get; set; }
}`,
            language: 'csharp',
            explanation: 'Separate DTOs for different operations. CreateBlogDto and UpdateBlogDto have validation attributes, while BlogDto is for responses. BlogSummaryDto is lightweight for list views.'
          },
          {
            title: 'Nested DTOs',
            code: `// DTOs/PostDtos.cs
public class PostDto
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PublishedDate { get; set; }
    public AuthorDto Author { get; set; } // Nested DTO
    public List<CommentDto> Comments { get; set; } // Collection of DTOs
}

public class PostSummaryDto
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public DateTime PublishedDate { get; set; }
    // No content, author, or comments - lightweight for lists
}

public class AuthorDto
{
    public int AuthorId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    // No posts - prevents circular reference
}

public class CommentDto
{
    public int CommentId { get; set; }
    public string Text { get; set; }
    public DateTime CreatedDate { get; set; }
    public string AuthorName { get; set; } // Just the name, not full Author object
}`,
            language: 'csharp',
            explanation: 'Use nested DTOs for related data. PostSummaryDto is lightweight for lists, while PostDto includes full details. Notice how CommentDto only includes AuthorName, not a full Author object.'
          },
          {
            title: 'Folder Structure',
            code: `MyApi/
├── Controllers/
│   ├── BlogsController.cs
│   └── PostsController.cs
├── Models/           // EF Core entities
│   ├── Blog.cs
│   ├── Post.cs
│   └── Author.cs
├── DTOs/             // Data Transfer Objects
│   ├── BlogDtos.cs
│   ├── PostDtos.cs
│   └── AuthorDtos.cs
├── Data/
│   └── AppDbContext.cs
└── Mappings/         // If using AutoMapper
    └── MappingProfile.cs`,
            language: 'plaintext',
            explanation: 'Keep DTOs separate from your entity models. This makes it clear which classes are for database mapping (Models) and which are for API responses (DTOs).'
          },
          {
            title: 'Validation with DTOs',
            code: `using System.ComponentModel.DataAnnotations;

public class CreatePostDto
{
    [Required(ErrorMessage = "Title is required")]
    [StringLength(200, MinimumLength = 5, 
        ErrorMessage = "Title must be between 5 and 200 characters")]
    public string Title { get; set; }
    
    [Required(ErrorMessage = "Content is required")]
    [MinLength(50, ErrorMessage = "Content must be at least 50 characters")]
    public string Content { get; set; }
    
    [Required]
    public int BlogId { get; set; }
}

[HttpPost]
public async Task<ActionResult<PostDto>> CreatePost(CreatePostDto dto)
{
    // ModelState.IsValid automatically checks validation attributes
    if (!ModelState.IsValid)
        return BadRequest(ModelState);
    
    var post = new Post
    {
        Title = dto.Title,
        Content = dto.Content,
        BlogId = dto.BlogId,
        PublishedDate = DateTime.UtcNow
    };
    
    _context.Posts.Add(post);
    await _context.SaveChangesAsync();
    
    // Return DTO
    return CreatedAtAction(nameof(GetPost), new { id = post.PostId }, 
        _mapper.Map<PostDto>(post));
}`,
            language: 'csharp',
            explanation: 'Use data annotations on input DTOs (Create/Update) for validation. ASP.NET Core automatically validates these before your controller action runs.'
          }
        ],
        comparison: {
          title: 'DTO Naming Conventions',
          options: [
            {
              name: 'Response DTOs',
              description: 'For GET endpoints - returning data',
              whenToUse: 'All GET operations',
              example: 'BlogDto, PostDto, BlogSummaryDto, PostDetailDto'
            },
            {
              name: 'Input DTOs',
              description: 'For POST/PUT endpoints - receiving data',
              whenToUse: 'Create and Update operations',
              example: 'CreateBlogDto, UpdateBlogDto, CreatePostDto'
            },
            {
              name: 'Summary DTOs',
              description: 'Lightweight versions for lists',
              whenToUse: 'List endpoints where you do not need all details',
              example: 'BlogSummaryDto, PostSummaryDto (fewer properties)'
            }
          ]
        }
      }
    ]
  }
];
