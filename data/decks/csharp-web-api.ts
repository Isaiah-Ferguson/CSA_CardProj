import { Deck } from '@/types/flashcard';

export const csharpWebApi: Deck = {
  id: '8',
  name: 'C# Web API & JavaScript Fetch',
  description: 'Building REST APIs with C# and consuming them with JavaScript',
  category: 'Web API',
  cards: [
    {
      id: '8-1',
      question: 'What is a REST API?',
      answer: 'REST (Representational State Transfer) is an architectural style for building web services that use HTTP methods to perform CRUD operations on resources.',
      code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  [HttpGet]
  public IActionResult GetAll() => Ok(products);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['rest', 'api', 'basics']
    },
    {
      id: '8-2',
      question: 'What are the main HTTP methods used in REST APIs?',
      answer: 'GET (retrieve), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove).',
      code: `[HttpGet] // Retrieve
[HttpPost] // Create
[HttpPut] // Update
[HttpPatch] // Partial update
[HttpDelete] // Delete`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['http-methods', 'rest', 'crud']
    },
    {
      id: '8-3',
      question: 'How do you create a basic Web API controller in C#?',
      answer: 'Inherit from ControllerBase, add [ApiController] and [Route] attributes.',
      code: `[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
  [HttpGet]
  public IActionResult GetUsers()
  {
      return Ok(new[] { "User1", "User2" });
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['controller', 'api', 'basics']
    },
    {
      id: '8-4',
      question: 'What is the fetch API in JavaScript?',
      answer: 'fetch() is a modern JavaScript API for making HTTP requests that returns a Promise.',
      code: `fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'javascript', 'http']
    },
    {
      id: '8-5',
      question: 'How do you make a GET request with fetch?',
      answer: 'Call fetch with the URL. By default, fetch uses the GET method.',
      code: `const response = await fetch('https://api.example.com/users');
const data = await response.json();
console.log(data);`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'get', 'javascript']
    },
    {
      id: '8-6',
      question: 'How do you make a POST request with fetch?',
      answer: 'Pass a configuration object with method: "POST" and body containing the data.',
      code: `fetch('https://api.example.com/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: 'John', email: 'john@example.com' })
})
.then(response => response.json())
.then(data => console.log(data));`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'post', 'javascript']
    },
    {
      id: '8-7',
      question: 'What does [ApiController] attribute do?',
      answer: 'Enables automatic model validation, binding source inference, and standardized error responses.',
      code: `[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  // Automatic 400 response for invalid models
  [HttpPost]
  public IActionResult Create(Product product) => Ok(product);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['attributes', 'controller', 'validation']
    },
    {
      id: '8-8',
      question: 'How do you return different HTTP status codes in C# Web API?',
      answer: 'Use methods like Ok() (200), Created() (201), BadRequest() (400), NotFound() (404).',
      code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
  var item = items.Find(x => x.Id == id);
  if (item == null)
      return NotFound();
  return Ok(item);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['status-codes', 'responses', 'http']
    },
    {
      id: '8-9',
      question: 'What is model binding in Web API?',
      answer: 'Model binding automatically maps HTTP request data to action method parameters.',
      code: `[HttpPost]
public IActionResult Create([FromBody] Product product)
{
  // product is automatically populated from request body
  return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['model-binding', 'parameters', 'data']
    },
    {
      id: '8-10',
      question: 'What are the binding source attributes?',
      answer: '[FromBody], [FromRoute], [FromQuery], [FromHeader], [FromForm] specify where to get parameter values.',
      code: `[HttpGet("{id}")]
public IActionResult Get(
  [FromRoute] int id,
  [FromQuery] string filter,
  [FromHeader] string authorization)
{
  return Ok(new { id, filter, authorization });
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['binding', 'attributes', 'parameters']
    },
    {
      id: '8-11',
      question: 'How do you handle errors in fetch requests?',
      answer: 'Use .catch() for network errors and check response.ok for HTTP errors.',
      code: `fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  return response.json();
})
.catch(error => console.error('Error:', error));`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'error-handling', 'javascript']
    },
    {
      id: '8-12',
      question: 'What is CORS and why is it important?',
      answer: 'CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API.',
      code: `// In Program.cs
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAll", policy =>
  {
      policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
  });
});

app.UseCors("AllowAll");`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['cors', 'security', 'configuration']
    },
    {
      id: '8-13',
      question: 'How do you add query parameters to a fetch request?',
      answer: 'Append them to the URL or use URLSearchParams.',
      code: `const params = new URLSearchParams({
search: 'laptop',
category: 'electronics',
limit: 10
});

fetch(\`https://api.example.com/products?\${params}\`)
.then(response => response.json())
.then(data => console.log(data));`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'query-params', 'url']
    },
    {
      id: '8-14',
      question: 'What is content negotiation in Web API?',
      answer: 'Content negotiation allows the API to return different formats (JSON, XML) based on Accept header.',
      code: `[HttpGet]
public IActionResult Get()
{
  var data = new { Name = "Product", Price = 99.99 };
  // Returns JSON or XML based on Accept header
  return Ok(data);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['content-negotiation', 'formats', 'headers']
    },
    {
      id: '8-15',
      question: 'How do you add custom headers to a fetch request?',
      answer: 'Pass a headers object in the fetch configuration.',
      code: `fetch('https://api.example.com/data', {
method: 'GET',
headers: {
  'Authorization': 'Bearer token123',
  'Content-Type': 'application/json',
  'X-Custom-Header': 'value'
}
})
.then(response => response.json());`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'headers', 'authentication']
    },
    {
      id: '8-16',
      question: 'What is dependency injection in Web API?',
      answer: 'DI is a design pattern where dependencies are provided to a class rather than created by it.',
      code: `public class ProductsController : ControllerBase
{
  private readonly IProductService _service;
  
  public ProductsController(IProductService service)
  {
      _service = service;
  }
  
  [HttpGet]
  public IActionResult Get() => Ok(_service.GetAll());
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['dependency-injection', 'design-patterns', 'services']
    },
    {
      id: '8-17',
      question: 'How do you register services for dependency injection?',
      answer: 'Use AddScoped, AddTransient, or AddSingleton in Program.cs.',
      code: `// In Program.cs
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddSingleton<IConfigService, ConfigService>();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['dependency-injection', 'services', 'lifetime']
    },
    {
      id: '8-18',
      question: 'How do you make a DELETE request with fetch?',
      answer: 'Set method to DELETE in the fetch configuration.',
      code: `fetch('https://api.example.com/users/123', {
method: 'DELETE',
headers: {
  'Authorization': 'Bearer token123'
}
})
.then(response => {
if (response.ok) {
  console.log('Deleted successfully');
}
});`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'delete', 'http']
    },
    {
      id: '8-19',
      question: 'What is async/await with fetch?',
      answer: 'async/await provides a cleaner syntax for working with Promises.',
      code: `async function fetchData() {
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Failed');
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error:', error);
}
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['async-await', 'fetch', 'promises']
    },
    {
      id: '8-20',
      question: 'How do you validate models in Web API?',
      answer: 'Use data annotations on model properties. [ApiController] automatically validates.',
      code: `public class Product
{
  [Required]
  [StringLength(100)]
  public string Name { get; set; }
  
  [Range(0.01, 10000)]
  public decimal Price { get; set; }
}

[HttpPost]
public IActionResult Create(Product product)
{
  // Automatically returns 400 if invalid
  return Ok(product);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['validation', 'data-annotations', 'models']
    },
    {
      id: '8-21',
      question: 'What is IActionResult?',
      answer: 'IActionResult is an interface representing the result of an action method.',
      code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
  var item = FindItem(id);
  if (item == null)
      return NotFound(); // Returns 404
  return Ok(item); // Returns 200 with data
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['action-result', 'responses', 'return-types']
    },
    {
      id: '8-22',
      question: 'How do you handle PUT requests with fetch?',
      answer: 'Set method to PUT and include the updated data in the body.',
      code: `fetch('https://api.example.com/users/123', {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  name: 'John Updated',
  email: 'john.new@example.com'
})
})
.then(response => response.json());`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'put', 'update']
    },
    {
      id: '8-23',
      question: 'What is routing in Web API?',
      answer: 'Routing maps HTTP requests to controller actions based on URL patterns.',
      code: `[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
  [HttpGet] // GET api/products
  [HttpGet("{id}")] // GET api/products/5
  [HttpGet("search/{term}")] // GET api/products/search/laptop
  public IActionResult Search(string term) => Ok();
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['routing', 'urls', 'attributes']
    },
    {
      id: '8-24',
      question: 'How do you return created resources properly?',
      answer: 'Use CreatedAtAction or CreatedAtRoute with the location of the new resource.',
      code: `[HttpPost]
public IActionResult Create(Product product)
{
  product.Id = GenerateId();
  products.Add(product);
  
  return CreatedAtAction(
      nameof(GetById),
      new { id = product.Id },
      product
  );
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['post', 'created', 'status-codes']
    },
    {
      id: '8-25',
      question: 'What is the difference between response.json() and response.text()?',
      answer: 'response.json() parses JSON, response.text() returns plain text. Both return Promises.',
      code: `// For JSON data
const data = await response.json();

// For plain text
const text = await response.text();

// For binary data
const blob = await response.blob();`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['fetch', 'response', 'parsing']
    },
    {
      id: '8-26',
      question: 'How do you implement pagination in Web API?',
      answer: 'Accept page and pageSize parameters, return subset of data with metadata.',
      code: `[HttpGet]
public IActionResult GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
{
  var items = allItems
      .Skip((page - 1) * pageSize)
      .Take(pageSize);
  
  return Ok(new {
      data = items,
      page,
      pageSize,
      total = allItems.Count
  });
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['pagination', 'query-params', 'data']
    },
    {
      id: '8-27',
      question: 'How do you abort a fetch request?',
      answer: 'Use AbortController to cancel fetch requests.',
      code: `const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
.then(response => response.json())
.catch(error => {
  if (error.name === 'AbortError') {
    console.log('Fetch aborted');
  }
});

// Abort the request
controller.abort();`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'abort', 'cancel']
    },
    {
      id: '8-28',
      question: 'What is middleware in ASP.NET Core?',
      answer: 'Middleware are components that handle requests and responses in the pipeline.',
      code: `// In Program.cs
app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['middleware', 'pipeline', 'configuration']
    },
    {
      id: '8-29',
      question: 'How do you handle file uploads in Web API?',
      answer: 'Use IFormFile parameter with [FromForm] attribute.',
      code: `[HttpPost("upload")]
public async Task<IActionResult> Upload([FromForm] IFormFile file)
{
  if (file == null || file.Length == 0)
      return BadRequest("No file uploaded");
  
  var path = Path.Combine("uploads", file.FileName);
  using var stream = new FileStream(path, FileMode.Create);
  await file.CopyToAsync(stream);
  
  return Ok(new { fileName = file.FileName });
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['file-upload', 'forms', 'files']
    },
    {
      id: '8-30',
      question: 'How do you send files with fetch?',
      answer: 'Use FormData to send files in a POST request.',
      code: `const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('description', 'My file');

fetch('https://api.example.com/upload', {
method: 'POST',
body: formData
// Don't set Content-Type, browser sets it automatically
})
.then(response => response.json());`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'formdata', 'file-upload']
    },
    {
      id: '8-31',
      question: 'What is ActionResult<T>?',
      answer: 'ActionResult<T> allows returning either T or IActionResult, providing better type safety.',
      code: `[HttpGet("{id}")]
public ActionResult<Product> GetById(int id)
{
  var product = products.Find(p => p.Id == id);
  if (product == null)
      return NotFound();
  return product; // Implicitly converts to Ok(product)
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['action-result', 'generics', 'return-types']
    },
    {
      id: '8-32',
      question: 'How do you implement filtering in Web API?',
      answer: 'Accept filter parameters in query string and apply them to the data.',
      code: `[HttpGet]
public IActionResult GetAll(
  [FromQuery] string category,
  [FromQuery] decimal? minPrice,
  [FromQuery] decimal? maxPrice)
{
  var query = products.AsQueryable();
  
  if (!string.IsNullOrEmpty(category))
      query = query.Where(p => p.Category == category);
  if (minPrice.HasValue)
      query = query.Where(p => p.Price >= minPrice);
  if (maxPrice.HasValue)
      query = query.Where(p => p.Price <= maxPrice);
  
  return Ok(query.ToList());
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['filtering', 'query-params', 'linq']
    },
    {
      id: '8-33',
      question: 'How do you set a timeout for fetch requests?',
      answer: 'Use AbortController with setTimeout.',
      code: `async function fetchWithTimeout(url, timeout = 5000) {
const controller = new AbortController();
const id = setTimeout(() => controller.abort(), timeout);

try {
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(id);
  return await response.json();
} catch (error) {
  clearTimeout(id);
  throw error;
}
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['fetch', 'timeout', 'abort']
    },
    {
      id: '8-34',
      question: 'What is API versioning?',
      answer: 'API versioning allows multiple versions of an API to coexist for backward compatibility.',
      code: `[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class ProductsController : ControllerBase
{
  [HttpGet]
  [MapToApiVersion("1.0")]
  public IActionResult GetV1() => Ok("Version 1");
  
  [HttpGet]
  [MapToApiVersion("2.0")]
  public IActionResult GetV2() => Ok("Version 2");
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['versioning', 'api-design', 'routing']
    },
    {
      id: '8-35',
      question: 'How do you handle authentication tokens in fetch?',
      answer: 'Include the token in the Authorization header.',
      code: `const token = localStorage.getItem('authToken');

fetch('https://api.example.com/protected', {
method: 'GET',
headers: {
  'Authorization': \`Bearer \${token}\`,
  'Content-Type': 'application/json'
}
})
.then(response => response.json());`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'authentication', 'jwt']
    },
    {
      id: '8-36',
      question: 'What is the difference between AddScoped, AddTransient, and AddSingleton?',
      answer: 'Scoped: per request, Transient: per injection, Singleton: one instance for app lifetime.',
      code: `// Singleton - one instance for entire app
builder.Services.AddSingleton<IConfigService, ConfigService>();

// Scoped - one instance per HTTP request
builder.Services.AddScoped<IUserService, UserService>();

// Transient - new instance every time
builder.Services.AddTransient<IEmailService, EmailService>();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['dependency-injection', 'lifetime', 'services']
    },
    {
      id: '8-37',
      question: 'How do you implement sorting in Web API?',
      answer: 'Accept sort parameters and apply ordering to the query.',
      code: `[HttpGet]
public IActionResult GetAll(
  [FromQuery] string sortBy = "name",
  [FromQuery] string order = "asc")
{
  var query = products.AsQueryable();
  
  query = sortBy.ToLower() switch
  {
      "price" => order == "desc" 
          ? query.OrderByDescending(p => p.Price)
          : query.OrderBy(p => p.Price),
      _ => order == "desc"
          ? query.OrderByDescending(p => p.Name)
          : query.OrderBy(p => p.Name)
  };
  
  return Ok(query.ToList());
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['sorting', 'query-params', 'linq']
    },
    {
      id: '8-38',
      question: 'How do you retry failed fetch requests?',
      answer: 'Implement a retry function with exponential backoff.',
      code: `async function fetchWithRetry(url, options = {}, retries = 3) {
for (let i = 0; i < retries; i++) {
  try {
    const response = await fetch(url, options);
    if (response.ok) return await response.json();
    throw new Error(\`HTTP \${response.status}\`);
  } catch (error) {
    if (i === retries - 1) throw error;
    await new Promise(resolve => 
      setTimeout(resolve, Math.pow(2, i) * 1000)
    );
  }
}
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['fetch', 'retry', 'error-handling']
    },
    {
      id: '8-39',
      question: 'What is content type negotiation?',
      answer: 'The API returns different content types (JSON, XML) based on Accept header.',
      code: `// Configure in Program.cs
builder.Services.AddControllers()
  .AddXmlSerializerFormatters();

// Client specifies format
fetch('https://api.example.com/data', {
headers: {
  'Accept': 'application/json' // or 'application/xml'
}
});`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['content-negotiation', 'formats', 'headers']
    },
    {
      id: '8-40',
      question: 'How do you implement PATCH in Web API?',
      answer: 'Use JsonPatchDocument for partial updates.',
      code: `[HttpPatch("{id}")]
public IActionResult Patch(int id, [FromBody] JsonPatchDocument<Product> patch)
{
  var product = products.Find(p => p.Id == id);
  if (product == null) return NotFound();
  
  patch.ApplyTo(product);
  return Ok(product);
}

// Client usage
fetch('/api/products/1', {
method: 'PATCH',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify([
  { op: 'replace', path: '/price', value: 29.99 }
])
});`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['patch', 'partial-update', 'json-patch']
    },
    {
      id: '8-41',
      question: 'How do you handle multiple concurrent fetch requests?',
      answer: 'Use Promise.all() to execute multiple requests in parallel.',
      code: `async function fetchMultiple() {
try {
  const [users, products, orders] = await Promise.all([
    fetch('https://api.example.com/users').then(r => r.json()),
    fetch('https://api.example.com/products').then(r => r.json()),
    fetch('https://api.example.com/orders').then(r => r.json())
  ]);
  
  return { users, products, orders };
} catch (error) {
  console.error('One or more requests failed:', error);
}
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'promises', 'parallel']
    },
    {
      id: '8-42',
      question: 'What is rate limiting in APIs?',
      answer: 'Rate limiting restricts the number of requests a client can make in a time period.',
      code: `// Using AspNetCoreRateLimit package
builder.Services.AddMemoryCache();
builder.Services.Configure<IpRateLimitOptions>(options =>
{
  options.GeneralRules = new List<RateLimitRule>
  {
      new RateLimitRule
      {
          Endpoint = "*",
          Limit = 100,
          Period = "1m"
      }
  };
});`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['rate-limiting', 'security', 'throttling']
    },
    {
      id: '8-43',
      question: 'How do you implement search functionality in Web API?',
      answer: 'Accept a search term and filter data using LINQ.',
      code: `[HttpGet("search")]
public IActionResult Search([FromQuery] string q)
{
  if (string.IsNullOrWhiteSpace(q))
      return BadRequest("Search term required");
  
  var results = products
      .Where(p => p.Name.Contains(q, StringComparison.OrdinalIgnoreCase) ||
                  p.Description.Contains(q, StringComparison.OrdinalIgnoreCase))
      .ToList();
  
  return Ok(results);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['search', 'filtering', 'linq']
    },
    {
      id: '8-44',
      question: 'How do you handle request/response logging?',
      answer: 'Use middleware to log HTTP requests and responses.',
      code: `public class RequestLoggingMiddleware
{
  private readonly RequestDelegate _next;
  
  public RequestLoggingMiddleware(RequestDelegate next)
  {
      _next = next;
  }
  
  public async Task InvokeAsync(HttpContext context)
  {
      Console.WriteLine(\$"Request: {context.Request.Method} {context.Request.Path}\");
      await _next(context);
      Console.WriteLine(\$"Response: {context.Response.StatusCode}\");
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['middleware', 'logging', 'debugging']
    },
    {
      id: '8-45',
      question: 'How do you implement caching with fetch?',
      answer: 'Use the cache option in fetch or implement manual caching.',
      code: `// Browser cache control
fetch('https://api.example.com/data', {
cache: 'force-cache' // Use cached version if available
});

// Manual caching
const cache = new Map();

async function fetchWithCache(url) {
if (cache.has(url)) {
  return cache.get(url);
}
const data = await fetch(url).then(r => r.json());
cache.set(url, data);
return data;
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'caching', 'performance']
    },
    {
      id: '8-46',
      question: 'What is response compression in Web API?',
      answer: 'Response compression reduces payload size using gzip or brotli.',
      code: `// In Program.cs
builder.Services.AddResponseCompression(options =>
{
  options.EnableForHttps = true;
  options.Providers.Add<BrotliCompressionProvider>();
  options.Providers.Add<GzipCompressionProvider>();
});

app.UseResponseCompression();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['compression', 'performance', 'optimization']
    },
    {
      id: '8-47',
      question: 'How do you implement health checks in Web API?',
      answer: 'Use built-in health check middleware to monitor API status.',
      code: `// In Program.cs
builder.Services.AddHealthChecks()
  .AddDbContextCheck<AppDbContext>();

app.MapHealthChecks("/health");

// Check endpoint
fetch('https://api.example.com/health')
.then(response => response.json())
.then(data => console.log('Health:', data));`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['health-checks', 'monitoring', 'diagnostics']
    },
    {
      id: '8-48',
      question: 'How do you handle OPTIONS requests (preflight)?',
      answer: 'CORS middleware automatically handles OPTIONS preflight requests.',
      code: `// Server handles OPTIONS automatically with CORS
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowClient", policy =>
  {
      policy.WithOrigins("https://example.com")
            .AllowAnyMethod()
            .AllowAnyHeader();
  });
});

// Browser sends OPTIONS before actual request
// No action needed in JavaScript`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['cors', 'preflight', 'options']
    },
    {
      id: '8-49',
      question: 'What is the difference between 200 OK and 204 No Content?',
      answer: '200 returns data in response body, 204 indicates success with no content to return.',
      code: `[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
  var product = products.Find(p => p.Id == id);
  if (product == null) return NotFound();
  
  products.Remove(product);
  return NoContent(); // 204 - successful deletion, no body
}

[HttpGet("{id}")]
public IActionResult Get(int id)
{
  var product = products.Find(p => p.Id == id);
  return Ok(product); // 200 - returns product data
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['status-codes', 'http', 'responses']
    },
    {
      id: '8-50',
      question: 'How do you implement request validation middleware?',
      answer: 'Create custom middleware to validate requests before they reach controllers.',
      code: `public class ValidationMiddleware
{
  private readonly RequestDelegate _next;
  
  public ValidationMiddleware(RequestDelegate next)
  {
      _next = next;
  }
  
  public async Task InvokeAsync(HttpContext context)
  {
      if (context.Request.Method == "POST" && 
          !context.Request.HasJsonContentType())
      {
          context.Response.StatusCode = 415;
          await context.Response.WriteAsync("Content-Type must be application/json");
          return;
      }
      
      await _next(context);
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['middleware', 'validation', 'requests']
    },
    {
      id: '8-51',
      question: 'What is JWT authentication and how do you implement it in Web API?',
      answer: 'JWT (JSON Web Token) is a compact token format for securely transmitting claims. Configure bearer authentication in Program.cs.',
      code: `// Program.cs
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =>
  {
      options.TokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(config["Jwt:Key"]!)),
          ValidateIssuer = true,
          ValidIssuer = config["Jwt:Issuer"],
          ValidateAudience = true,
          ValidAudience = config["Jwt:Audience"]
      };
  });

app.UseAuthentication();
app.UseAuthorization();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['jwt', 'authentication', 'security']
    },
    {
      id: '8-52',
      question: 'How do you generate a JWT token in C#?',
      answer: 'Use JwtSecurityTokenHandler to create and sign a token with claims.',
      code: `public string GenerateToken(string userId, string email)
{
  var claims = new[]
  {
      new Claim(ClaimTypes.NameIdentifier, userId),
      new Claim(ClaimTypes.Email, email)
  };

  var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
  var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

  var token = new JwtSecurityToken(
      issuer: _config["Jwt:Issuer"],
      audience: _config["Jwt:Audience"],
      claims: claims,
      expires: DateTime.UtcNow.AddHours(1),
      signingCredentials: creds);

  return new JwtSecurityTokenHandler().WriteToken(token);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['jwt', 'token', 'authentication']
    },
    {
      id: '8-53',
      question: 'How do you protect endpoints with [Authorize] in Web API?',
      answer: 'Add [Authorize] to controllers or actions to require authentication. Use [AllowAnonymous] to override.',
      code: `[ApiController]
[Route("api/[controller]")]
[Authorize] // All actions require auth
public class OrdersController : ControllerBase
{
  [HttpGet]
  public IActionResult GetAll() => Ok(orders);

  [HttpGet("public")]
  [AllowAnonymous] // This one is open
  public IActionResult GetPublic() => Ok("Public data");
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['authorize', 'security', 'authentication']
    },
    {
      id: '8-54',
      question: 'How do you send a JWT token with fetch?',
      answer: 'Store the token and include it in the Authorization header as Bearer.',
      code: `async function fetchProtected(url) {
const token = localStorage.getItem("token");

const response = await fetch(url, {
  headers: {
    "Authorization": \`Bearer \${token}\`,
    "Content-Type": "application/json"
  }
});

if (response.status === 401) {
  // Token expired, redirect to login
  window.location.href = "/login";
  return;
}

return await response.json();
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['jwt', 'fetch', 'authorization']
    },
    {
      id: '8-55',
      question: 'What is the Repository pattern in Web API?',
      answer: 'The Repository pattern abstracts data access logic behind an interface, decoupling the controller from the data layer.',
      code: `public interface IProductRepository
{
  Task<IEnumerable<Product>> GetAllAsync();
  Task<Product?> GetByIdAsync(int id);
  Task AddAsync(Product product);
  Task DeleteAsync(int id);
}

public class ProductRepository : IProductRepository
{
  private readonly AppDbContext _db;
  public ProductRepository(AppDbContext db) => _db = db;

  public async Task<IEnumerable<Product>> GetAllAsync() =>
      await _db.Products.ToListAsync();
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['repository-pattern', 'design-patterns', 'data-access']
    },
    {
      id: '8-56',
      question: 'How do you use Entity Framework Core with Web API?',
      answer: 'Install EF Core, create a DbContext, register it in Program.cs, and use it in repositories or controllers.',
      code: `public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options)
      : base(options) { }

  public DbSet<Product> Products => Set<Product>();
}

// In Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// In controller
[HttpGet]
public async Task<IActionResult> GetAll()
{
  var products = await _context.Products.ToListAsync();
  return Ok(products);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['entity-framework', 'database', 'ef-core']
    },
    {
      id: '8-57',
      question: 'What is a DTO (Data Transfer Object)?',
      answer: 'A DTO is a plain object used to transfer data between layers, hiding internal model details.',
      code: `// Domain model
public class User
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string PasswordHash { get; set; } // Don't expose!
}

// DTO - safe to return to client
public class UserDto
{
  public int Id { get; set; }
  public string Name { get; set; }
}

[HttpGet("{id}")]
public ActionResult<UserDto> GetUser(int id)
{
  var user = _repo.GetById(id);
  return new UserDto { Id = user.Id, Name = user.Name };
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['dto', 'models', 'api-design']
    },
    {
      id: '8-58',
      question: 'How do you use AutoMapper in Web API?',
      answer: 'AutoMapper maps between models and DTOs automatically based on matching property names.',
      code: `// Profile
public class MappingProfile : Profile
{
  public MappingProfile()
  {
      CreateMap<Product, ProductDto>();
      CreateMap<CreateProductDto, Product>();
  }
}

// In Program.cs
builder.Services.AddAutoMapper(typeof(MappingProfile));

// In controller
[HttpGet("{id}")]
public ActionResult<ProductDto> Get(int id)
{
  var product = _repo.GetById(id);
  return _mapper.Map<ProductDto>(product);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['automapper', 'dto', 'mapping']
    },
    {
      id: '8-59',
      question: 'How do you use async/await in C# Web API controllers?',
      answer: 'Mark action methods as async Task<IActionResult> and await async operations.',
      code: `[HttpGet]
public async Task<IActionResult> GetAll()
{
  var products = await _productService.GetAllAsync();
  return Ok(products);
}

[HttpPost]
public async Task<IActionResult> Create([FromBody] CreateProductDto dto)
{
  var product = await _productService.CreateAsync(dto);
  return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['async-await', 'controllers', 'performance']
    },
    {
      id: '8-60',
      question: 'How do you implement global exception handling in Web API?',
      answer: 'Use UseExceptionHandler middleware or a custom exception filter to catch unhandled exceptions.',
      code: `// Program.cs - minimal approach
app.UseExceptionHandler(appError =>
{
  appError.Run(async context =>
  {
      context.Response.StatusCode = 500;
      context.Response.ContentType = "application/json";

      var feature = context.Features.Get<IExceptionHandlerFeature>();
      if (feature != null)
      {
          await context.Response.WriteAsJsonAsync(new
          {
              StatusCode = 500,
              Message = "Internal Server Error",
              Detail = feature.Error.Message
          });
      }
  });
});`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['exception-handling', 'middleware', 'errors']
    },
    {
      id: '8-61',
      question: 'What is Swagger/OpenAPI and how do you enable it?',
      answer: 'Swagger generates interactive API documentation. Use Swashbuckle to enable it in ASP.NET Core.',
      code: `// Program.cs
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new OpenApiInfo
  {
      Title = "My API",
      Version = "v1"
  });
});

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['swagger', 'openapi', 'documentation']
    },
    {
      id: '8-62',
      question: 'How do you read configuration values in Web API?',
      answer: 'Inject IConfiguration or use the Options pattern to read from appsettings.json.',
      code: `// appsettings.json
{
"AppSettings": {
  "MaxPageSize": 50,
  "ApiKey": "secret"
}
}

// Using IConfiguration
public class ProductsController : ControllerBase
{
  private readonly IConfiguration _config;
  public ProductsController(IConfiguration config) => _config = config;

  [HttpGet]
  public IActionResult Get()
  {
      var maxSize = _config.GetValue<int>("AppSettings:MaxPageSize");
      return Ok(maxSize);
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['configuration', 'appsettings', 'iconfig']
    },
    {
      id: '8-63',
      question: 'How do you use the Options pattern in Web API?',
      answer: 'Create a settings class, bind it to configuration, and inject IOptions<T> into your services.',
      code: `public class JwtSettings
{
  public string Key { get; set; } = "";
  public string Issuer { get; set; } = "";
}

// Program.cs
builder.Services.Configure<JwtSettings>(
  builder.Configuration.GetSection("JwtSettings"));

// Service
public class TokenService
{
  private readonly JwtSettings _settings;
  public TokenService(IOptions<JwtSettings> options)
      => _settings = options.Value;
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['options-pattern', 'configuration', 'services']
    },
    {
      id: '8-64',
      question: 'How do you intercept fetch requests globally (request interceptor)?',
      answer: 'Wrap fetch in a custom function to add common headers or handle responses globally.',
      code: `const originalFetch = window.fetch;

window.fetch = async function(url, options = {}) {
const token = localStorage.getItem("token");

const mergedOptions = {
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...(token ? { "Authorization": \`Bearer \${token}\` } : {}),
    ...options.headers
  }
};

const response = await originalFetch(url, mergedOptions);

if (response.status === 401) {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

return response;
};`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['fetch', 'interceptor', 'authentication']
    },
    {
      id: '8-65',
      question: 'What is response streaming and how does fetch handle it?',
      answer: 'fetch exposes the response body as a ReadableStream for processing large responses incrementally.',
      code: `async function streamResponse(url) {
const response = await fetch(url);
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value));
}
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['streaming', 'fetch', 'readablestream']
    },
    {
      id: '8-66',
      question: 'How do you implement role-based authorization in Web API?',
      answer: 'Add roles to JWT claims and use [Authorize(Roles = "...")] on controllers or actions.',
      code: `// Add role claim when creating token
claims.Add(new Claim(ClaimTypes.Role, "Admin"));

// Protect by role
[HttpDelete("{id}")]
[Authorize(Roles = "Admin")]
public IActionResult Delete(int id)
{
  _productService.Delete(id);
  return NoContent();
}

// Multiple roles
[Authorize(Roles = "Admin,Manager")]
public IActionResult Update(int id, Product p) { ... }`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['roles', 'authorization', 'security']
    },
    {
      id: '8-67',
      question: 'What is policy-based authorization in Web API?',
      answer: 'Policies allow complex authorization rules beyond simple role checks.',
      code: `// Program.cs
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("MinAge18", policy =>
      policy.RequireClaim("age", "18", "19", "20"));

  options.AddPolicy("AdminOrManager", policy =>
      policy.RequireRole("Admin", "Manager"));
});

// Controller
[HttpGet("restricted")]
[Authorize(Policy = "MinAge18")]
public IActionResult Restricted() => Ok("Allowed");`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['policy', 'authorization', 'claims']
    },
    {
      id: '8-68',
      question: 'How do you use IHttpClientFactory to call external APIs from Web API?',
      answer: 'Register a named or typed HttpClient and inject it into services.',
      code: `// Program.cs
builder.Services.AddHttpClient("weather", client =>
{
  client.BaseAddress = new Uri("https://api.weather.com/");
  client.DefaultRequestHeaders.Add("Accept", "application/json");
});

// Service
public class WeatherService
{
  private readonly HttpClient _client;

  public WeatherService(IHttpClientFactory factory)
      => _client = factory.CreateClient("weather");

  public async Task<string> GetWeatherAsync(string city)
  {
      var response = await _client.GetAsync($"forecast?city={city}");
      return await response.Content.ReadAsStringAsync();
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['httpclient', 'external-api', 'http']
    },
    {
      id: '8-69',
      question: 'How do you handle concurrent fetch requests with Promise.allSettled()?',
      answer: 'Promise.allSettled() waits for all promises regardless of rejection, returning status for each.',
      code: `async function fetchAll(urls) {
const results = await Promise.allSettled(
  urls.map(url => fetch(url).then(r => r.json()))
);

results.forEach((result, i) => {
  if (result.status === "fulfilled") {
    console.log(\`URL \${i}: success\`, result.value);
  } else {
    console.error(\`URL \${i}: failed\`, result.reason);
  }
});
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'promise-allsettled', 'error-handling']
    },
    {
      id: '8-70',
      question: 'What is a custom action filter in Web API?',
      answer: 'Action filters run code before or after action methods execute, useful for logging, validation, or modifying results.',
      code: `public class LogActionFilter : IActionFilter
{
  public void OnActionExecuting(ActionExecutingContext context)
  {
      Console.WriteLine($"Executing: {context.ActionDescriptor.DisplayName}");
  }

  public void OnActionExecuted(ActionExecutedContext context)
  {
      Console.WriteLine($"Executed: {context.ActionDescriptor.DisplayName}");
  }
}

// Register globally
builder.Services.AddControllers(options =>
  options.Filters.Add<LogActionFilter>());`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['action-filters', 'middleware', 'logging']
    },
    {
      id: '8-71',
      question: 'How do you implement soft delete in Web API?',
      answer: 'Add an IsDeleted flag to the model and filter it in queries instead of removing from the database.',
      code: `public class Product
{
  public int Id { get; set; }
  public string Name { get; set; }
  public bool IsDeleted { get; set; } = false;
}

[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
  var product = await _db.Products.FindAsync(id);
  if (product == null) return NotFound();
  product.IsDeleted = true;
  await _db.SaveChangesAsync();
  return NoContent();
}

// Query - always exclude deleted
var active = await _db.Products
  .Where(p => !p.IsDeleted)
  .ToListAsync();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['soft-delete', 'database', 'patterns']
    },
    {
      id: '8-72',
      question: 'How do you read a JSON response body only once with fetch?',
      answer: 'Response bodies can only be consumed once. Use response.clone() if you need to read the body multiple times.',
      code: `async function fetchAndLog(url) {
const response = await fetch(url);

// Clone before consuming
const clone = response.clone();

// Log raw text
const text = await clone.text();
console.log("Raw:", text);

// Parse original as JSON
const data = await response.json();
return data;
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'response-body', 'clone']
    },
    {
      id: '8-73',
      question: 'What is minimal API in ASP.NET Core?',
      answer: 'Minimal APIs define routes and handlers directly in Program.cs without controllers.',
      code: `var app = builder.Build();

app.MapGet("/api/products", async (AppDbContext db) =>
  await db.Products.ToListAsync());

app.MapGet("/api/products/{id}", async (int id, AppDbContext db) =>
  await db.Products.FindAsync(id) is Product p
      ? Results.Ok(p)
      : Results.NotFound());

app.MapPost("/api/products", async (Product product, AppDbContext db) =>
{
  db.Products.Add(product);
  await db.SaveChangesAsync();
  return Results.Created($"/api/products/{product.Id}", product);
});`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['minimal-api', 'aspnet', 'routing']
    },
    {
      id: '8-74',
      question: 'How do you implement cursor-based pagination?',
      answer: 'Cursor pagination uses a pointer (last seen ID) instead of page numbers, improving performance on large datasets.',
      code: `[HttpGet]
public async Task<IActionResult> GetAll(
  [FromQuery] int? lastId,
  [FromQuery] int limit = 20)
{
  var query = _db.Products.OrderBy(p => p.Id);

  if (lastId.HasValue)
      query = (IOrderedQueryable<Product>)query
          .Where(p => p.Id > lastId.Value);

  var items = await query.Take(limit).ToListAsync();
  var nextCursor = items.LastOrDefault()?.Id;

  return Ok(new { items, nextCursor });
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['pagination', 'cursor', 'performance']
    },
    {
      id: '8-75',
      question: 'How do you send a PATCH request with fetch using JSON Patch?',
      answer: 'Send an array of JSON Patch operations with Content-Type application/json-patch+json.',
      code: `const patch = [
{ op: "replace", path: "/name", value: "New Name" },
{ op: "add",     path: "/tags/-", value: "new-tag" },
{ op: "remove",  path: "/oldField" }
];

const response = await fetch('/api/products/5', {
method: 'PATCH',
headers: {
  'Content-Type': 'application/json-patch+json'
},
body: JSON.stringify(patch)
});

const updated = await response.json();`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['patch', 'json-patch', 'fetch']
    },
    {
      id: '8-76',
      question: 'What is ILogger and how do you use it in Web API?',
      answer: 'ILogger<T> is the built-in logging interface. Inject it into controllers or services.',
      code: `public class ProductsController : ControllerBase
{
  private readonly ILogger<ProductsController> _logger;

  public ProductsController(ILogger<ProductsController> logger)
      => _logger = logger;

  [HttpGet("{id}")]
  public IActionResult Get(int id)
  {
      _logger.LogInformation("Getting product {Id}", id);
      var product = _service.GetById(id);
      if (product == null)
      {
          _logger.LogWarning("Product {Id} not found", id);
          return NotFound();
      }
      return Ok(product);
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['logging', 'ilogger', 'debugging']
    },
    {
      id: '8-77',
      question: 'How do you use Server-Sent Events (SSE) with fetch?',
      answer: 'Use EventSource for SSE, or fetch with a ReadableStream for custom streaming.',
      code: `// Using EventSource (simpler)
const eventSource = new EventSource('/api/events');
eventSource.onmessage = (e) => console.log('Event:', e.data);
eventSource.onerror = () => eventSource.close();

// Using fetch for streaming
const response = await fetch('/api/stream');
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
const { done, value } = await reader.read();
if (done) break;
console.log(decoder.decode(value));
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['sse', 'streaming', 'real-time']
    },
    {
      id: '8-78',
      question: 'What is output caching in ASP.NET Core Web API?',
      answer: 'Output caching stores HTTP responses and serves them from cache for subsequent identical requests.',
      code: `// Program.cs
builder.Services.AddOutputCache(options =>
{
  options.AddBasePolicy(builder => builder.Cache());
});
app.UseOutputCache();

// Controller
[HttpGet]
[OutputCache(Duration = 60)] // Cache for 60 seconds
public async Task<IActionResult> GetAll()
{
  var products = await _db.Products.ToListAsync();
  return Ok(products);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['caching', 'output-cache', 'performance']
    },
    {
      id: '8-79',
      question: 'How do you build a reusable fetch hook for React-style usage?',
      answer: 'Wrap fetch in a function that manages loading/error/data state and returns them.',
      code: `async function useFetch(url, options = {}) {
let data = null, error = null, loading = true;

try {
  const response = await fetch(url, options);
  if (!response.ok)
    throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
  data = await response.json();
} catch (e) {
  error = e;
} finally {
  loading = false;
}

return { data, error, loading };
}

const { data, error } = await useFetch('/api/products');`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'reusable', 'patterns']
    },
    {
      id: '8-80',
      question: 'What is a background service in ASP.NET Core?',
      answer: 'Background services run long-running tasks in the background using IHostedService or BackgroundService.',
      code: `public class DataSyncService : BackgroundService
{
  private readonly ILogger<DataSyncService> _logger;

  public DataSyncService(ILogger<DataSyncService> logger)
      => _logger = logger;

  protected override async Task ExecuteAsync(CancellationToken stoppingToken)
  {
      while (!stoppingToken.IsCancellationRequested)
      {
          _logger.LogInformation("Syncing data...");
          await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
      }
  }
}

// Program.cs
builder.Services.AddHostedService<DataSyncService>();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['background-service', 'hosted-service', 'tasks']
    },
    {
      id: '8-81',
      question: 'How do you add XML support to a Web API response?',
      answer: 'Call AddXmlSerializerFormatters() and the client sets Accept: application/xml.',
      code: `// Program.cs
builder.Services.AddControllers()
  .AddXmlSerializerFormatters();

// Client request
fetch('/api/products', {
headers: { 'Accept': 'application/xml' }
})
.then(res => res.text())
.then(xml => console.log(xml));`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'easy',
      tags: ['xml', 'content-negotiation', 'formatters']
    },
    {
      id: '8-82',
      question: 'How do you implement a custom result type (IActionResult) in Web API?',
      answer: 'Implement IActionResult and override ExecuteResultAsync to write a custom response.',
      code: `public class CsvResult : IActionResult
{
  private readonly IEnumerable<string[]> _rows;
  public CsvResult(IEnumerable<string[]> rows) => _rows = rows;

  public async Task ExecuteResultAsync(ActionContext context)
  {
      context.HttpContext.Response.ContentType = "text/csv";
      await using var writer = new StreamWriter(context.HttpContext.Response.Body);
      foreach (var row in _rows)
          await writer.WriteLineAsync(string.Join(",", row));
  }
}

[HttpGet("export")]
public IActionResult Export() =>
  new CsvResult(new[] { new[] { "Id", "Name" }, new[] { "1", "Apple" } });`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['custom-result', 'iactionresult', 'responses']
    },
    {
      id: '8-83',
      question: 'How do you use fetch with cookies (credentials)?',
      answer: 'Set credentials option to include, same-origin, or omit to control cookie sending.',
      code: `// Include cookies in cross-origin requests
fetch('https://api.example.com/user', {
credentials: 'include'
});

// Same-origin only (default in older browsers)
fetch('/api/profile', {
credentials: 'same-origin'
});

// Never send cookies
fetch('https://api.example.com/public', {
credentials: 'omit'
});`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'credentials', 'cookies']
    },
    {
      id: '8-84',
      question: 'What is the difference between 401 Unauthorized and 403 Forbidden?',
      answer: '401 means authentication is required or failed. 403 means the user is authenticated but lacks permission.',
      code: `[HttpGet("admin-only")]
public IActionResult AdminOnly()
{
  // 401 - if no token / invalid token (handled by middleware)
  // 403 - if valid token but wrong role
  if (!User.IsInRole("Admin"))
      return Forbid(); // 403

  return Ok("Admin data");
}

// 401 fetch handling
if (response.status === 401) redirect("/login");
if (response.status === 403) showError("Access denied");`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['status-codes', 'authentication', 'authorization']
    },
    {
      id: '8-85',
      question: 'How do you implement distributed caching with Redis in Web API?',
      answer: 'Use IDistributedCache backed by Redis for caching shared across multiple server instances.',
      code: `// Program.cs
builder.Services.AddStackExchangeRedisCache(options =>
{
  options.Configuration = "localhost:6379";
});

// Service
public async Task<Product?> GetProductAsync(int id)
{
  var key = $"product:{id}";
  var cached = await _cache.GetStringAsync(key);
  if (cached != null) return JsonSerializer.Deserialize<Product>(cached);

  var product = await _db.Products.FindAsync(id);
  if (product != null)
      await _cache.SetStringAsync(key,
          JsonSerializer.Serialize(product),
          new DistributedCacheEntryOptions
          {
              AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
          });
  return product;
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['redis', 'caching', 'distributed']
    },
    {
      id: '8-86',
      question: 'How do you track upload progress with fetch?',
      answer: 'fetch does not natively support upload progress. Use XMLHttpRequest for progress events.',
      code: `function uploadWithProgress(url, file, onProgress) {
return new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      const percent = Math.round((e.loaded / e.total) * 100);
      onProgress(percent);
    }
  });

  xhr.addEventListener("load", () => resolve(xhr.response));
  xhr.addEventListener("error", reject);

  xhr.open("POST", url);
  const formData = new FormData();
  formData.append("file", file);
  xhr.send(formData);
});
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['upload', 'progress', 'xhr']
    },
    {
      id: '8-87',
      question: 'What is SignalR and when would you use it over fetch?',
      answer: 'SignalR provides real-time bidirectional communication over WebSockets. Use it for live notifications, chat, or dashboards instead of polling with fetch.',
      code: `// Server (Hub)
public class ChatHub : Hub
{
  public async Task SendMessage(string user, string message)
  {
      await Clients.All.SendAsync("ReceiveMessage", user, message);
  }
}

// Client (JavaScript)
const connection = new signalR.HubConnectionBuilder()
  .withUrl("/chatHub")
  .build();

connection.on("ReceiveMessage", (user, msg) =>
  console.log(\`\${user}: \${msg}\`));

await connection.start();
await connection.invoke("SendMessage", "Alice", "Hello!");`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['signalr', 'websockets', 'real-time']
    },
    {
      id: '8-88',
      question: 'How do you implement HATEOAS in Web API?',
      answer: 'HATEOAS includes hypermedia links in responses to guide clients to possible next actions.',
      code: `[HttpGet("{id}")]
public IActionResult GetById(int id)
{
  var product = _repo.GetById(id);
  if (product == null) return NotFound();

  var response = new
  {
      product.Id,
      product.Name,
      product.Price,
      links = new[]
      {
          new { rel = "self",   href = $"/api/products/{id}", method = "GET"    },
          new { rel = "update", href = $"/api/products/{id}", method = "PUT"    },
          new { rel = "delete", href = $"/api/products/{id}", method = "DELETE" }
      }
  };

  return Ok(response);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['hateoas', 'api-design', 'hypermedia']
    },
    {
      id: '8-89',
      question: 'How do you validate environment-specific configuration on startup?',
      answer: 'Use IStartupFilter or validate IOptions<T> on startup to catch misconfigurations early.',
      code: `public class DatabaseSettings
{
  [Required]
  public string ConnectionString { get; set; } = "";
  
  [Range(1, 100)]
  public int MaxPoolSize { get; set; } = 10;
}

// Program.cs - validate on startup
builder.Services
  .AddOptions<DatabaseSettings>()
  .Bind(builder.Configuration.GetSection("Database"))
  .ValidateDataAnnotations()
  .ValidateOnStart();`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['configuration', 'validation', 'startup']
    },
    {
      id: '8-90',
      question: 'How do you implement optimistic concurrency in Web API?',
      answer: 'Use ETags or a RowVersion column. The client sends the ETag back; if it changed, return 412 Precondition Failed.',
      code: `[HttpPut("{id}")]
public async Task<IActionResult> Update(
  int id,
  [FromBody] Product product,
  [FromHeader(Name = "If-Match")] string? etag)
{
  var existing = await _db.Products.FindAsync(id);
  if (existing == null) return NotFound();

  var currentEtag = $"\"{existing.RowVersion}\"";
  if (etag != null && etag != currentEtag)
      return StatusCode(412, "Resource was modified");

  existing.Name = product.Name;
  await _db.SaveChangesAsync();
  Response.Headers["ETag"] = $"\"{existing.RowVersion}\"";
  return Ok(existing);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['concurrency', 'etag', 'optimistic-locking']
    },
    {
      id: '8-91',
      question: 'How do you batch multiple API requests into one with fetch?',
      answer: 'Use Promise.all for parallel requests or call a batch endpoint that accepts multiple operations.',
      code: `// Parallel fetch (client-side batching)
async function batchFetch(ids) {
const requests = ids.map(id =>
  fetch(\`/api/products/\${id}\`).then(r => r.json())
);
return await Promise.all(requests);
}

// Server-side batch endpoint
// POST /api/products/batch
// Body: { ids: [1, 2, 3] }
[HttpPost("batch")]
public async Task<IActionResult> Batch([FromBody] BatchRequest req)
{
  var products = await _db.Products
      .Where(p => req.Ids.Contains(p.Id))
      .ToListAsync();
  return Ok(products);
}`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['batch', 'fetch', 'performance']
    },
    {
      id: '8-92',
      question: 'What is the difference between IActionResult and ActionResult<T>?',
      answer: 'IActionResult can return any result type. ActionResult<T> constrains the success type, enabling better Swagger docs and type inference.',
      code: `// IActionResult - flexible but no type info
[HttpGet("{id}")]
public IActionResult GetFlexible(int id)
{
  var p = _repo.Get(id);
  return p == null ? NotFound() : Ok(p);
}

// ActionResult<T> - type-safe success response
[HttpGet("{id}")]
public ActionResult<Product> GetTyped(int id)
{
  var p = _repo.Get(id);
  if (p == null) return NotFound();
  return p; // Implicit Ok(p)
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['action-result', 'return-types', 'swagger']
    },
    {
      id: '8-93',
      question: 'How do you implement API key authentication in Web API?',
      answer: 'Create middleware or an attribute that checks a custom header for a valid API key.',
      code: `public class ApiKeyMiddleware
{
  private readonly RequestDelegate _next;
  private const string API_KEY_HEADER = "X-Api-Key";

  public ApiKeyMiddleware(RequestDelegate next) => _next = next;

  public async Task InvokeAsync(HttpContext context, IConfiguration config)
  {
      if (!context.Request.Headers.TryGetValue(API_KEY_HEADER, out var key) ||
          key != config["ApiKey"])
      {
          context.Response.StatusCode = 401;
          await context.Response.WriteAsync("Invalid API Key");
          return;
      }
      await _next(context);
  }
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['api-key', 'authentication', 'middleware']
    },
    {
      id: '8-94',
      question: 'How do you cancel a fetch request when a component unmounts?',
      answer: 'Use AbortController and call abort() in a cleanup function.',
      code: `function loadData(elementId) {
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .then(r => r.json())
  .then(data => {
    document.getElementById(elementId).textContent = JSON.stringify(data);
  })
  .catch(err => {
    if (err.name !== 'AbortError') console.error(err);
  });

// Return cleanup function
return () => controller.abort();
}

const cleanup = loadData("output");
// Later...
cleanup(); // Cancels the request`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['fetch', 'abort', 'cleanup']
    },
    {
      id: '8-95',
      question: 'What is problem details (RFC 7807) and how do you return it?',
      answer: 'Problem Details is a standardized error response format. ASP.NET Core returns it automatically with [ApiController].',
      code: `// Auto-generated by [ApiController] for 400+ errors
// {
//   "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
//   "title": "One or more validation errors occurred.",
//   "status": 400,
//   "errors": { "Name": ["The Name field is required."] }
// }

// Custom problem details
[HttpGet("{id}")]
public IActionResult Get(int id)
{
  if (id <= 0)
      return Problem(
          title: "Invalid ID",
          detail: "ID must be a positive integer",
          statusCode: 400,
          type: "https://example.com/errors/invalid-id");
  return Ok(_repo.Get(id));
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'medium',
      tags: ['problem-details', 'error-format', 'rfc7807']
    },
    {
      id: '8-96',
      question: 'How do you version a Web API using URL path versioning?',
      answer: 'Include version in the route template and use [ApiVersion] attribute.',
      code: `// Install: Microsoft.AspNetCore.Mvc.Versioning
builder.Services.AddApiVersioning(options =>
{
  options.DefaultApiVersion = new ApiVersion(1, 0);
  options.AssumeDefaultVersionWhenUnspecified = true;
  options.ReportApiVersions = true;
});

[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class ProductsController : ControllerBase
{
  [HttpGet, MapToApiVersion("1.0")]
  public IActionResult GetV1() => Ok("V1 response");

  [HttpGet, MapToApiVersion("2.0")]
  public IActionResult GetV2() => Ok(new { version = 2, data = "V2 response" });
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['versioning', 'routing', 'api-design']
    },
    {
      id: '8-97',
      question: 'How do you implement idempotent POST requests in Web API?',
      answer: 'Use an idempotency key header to prevent duplicate processing of the same request.',
      code: `[HttpPost]
public async Task<IActionResult> CreateOrder(
  [FromBody] CreateOrderDto dto,
  [FromHeader(Name = "Idempotency-Key")] string? idempotencyKey)
{
  if (idempotencyKey != null)
  {
      var existing = await _cache.GetAsync<Order>(idempotencyKey);
      if (existing != null) return Ok(existing); // Return cached result
  }

  var order = await _orderService.CreateAsync(dto);

  if (idempotencyKey != null)
      await _cache.SetAsync(idempotencyKey, order,
          TimeSpan.FromHours(24));

  return CreatedAtAction(nameof(GetById), new { id = order.Id }, order);
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['idempotency', 'post', 'api-design']
    },
    {
      id: '8-98',
      question: 'How do you implement server-side request deduplication with fetch?',
      answer: 'Cache in-flight promises by URL so duplicate concurrent requests share the same response.',
      code: `const inFlight = new Map();

async function deduplicatedFetch(url) {
if (inFlight.has(url)) {
  return inFlight.get(url); // Return same promise
}

const promise = fetch(url)
  .then(r => r.json())
  .finally(() => inFlight.delete(url));

inFlight.set(url, promise);
return promise;
}

// Two calls at the same time — only one HTTP request made
deduplicatedFetch('/api/products');
deduplicatedFetch('/api/products');`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['deduplication', 'fetch', 'performance']
    },
    {
      id: '8-99',
      question: 'What is the Unit of Work pattern in Web API?',
      answer: 'Unit of Work groups multiple database operations into a single transaction that succeeds or fails together.',
      code: `public interface IUnitOfWork : IDisposable
{
  IProductRepository Products { get; }
  IOrderRepository Orders { get; }
  Task<int> SaveChangesAsync();
}

public class UnitOfWork : IUnitOfWork
{
  private readonly AppDbContext _db;
  public IProductRepository Products { get; }
  public IOrderRepository Orders { get; }

  public UnitOfWork(AppDbContext db)
  {
      _db = db;
      Products = new ProductRepository(db);
      Orders   = new OrderRepository(db);
  }

  public Task<int> SaveChangesAsync() => _db.SaveChangesAsync();
  public void Dispose() => _db.Dispose();
}`,
      language: 'csharp',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['unit-of-work', 'design-patterns', 'transactions']
    },
    {
      id: '8-100',
      question: 'How do you implement a circuit breaker for fetch requests?',
      answer: 'A circuit breaker stops calling a failing service after a threshold, returning errors immediately until a recovery period passes.',
      code: `class CircuitBreaker {
constructor(threshold = 3, timeout = 10000) {
  this.failures = 0;
  this.threshold = threshold;
  this.timeout = timeout;
  this.state = "closed"; // closed | open | half-open
  this.nextAttempt = Date.now();
}

async call(fn) {
  if (this.state === "open") {
    if (Date.now() < this.nextAttempt)
      throw new Error("Circuit is OPEN");
    this.state = "half-open";
  }

  try {
    const result = await fn();
    this.failures = 0;
    this.state = "closed";
    return result;
  } catch (e) {
    this.failures++;
    if (this.failures >= this.threshold) {
      this.state = "open";
      this.nextAttempt = Date.now() + this.timeout;
    }
    throw e;
  }
}
}

const breaker = new CircuitBreaker();
await breaker.call(() =>
fetch('/api/products').then(r => r.json())
);`,
      language: 'javascript',
      category: 'Web API',
      difficulty: 'hard',
      tags: ['circuit-breaker', 'resilience', 'error-handling']
    }
  ]
};
