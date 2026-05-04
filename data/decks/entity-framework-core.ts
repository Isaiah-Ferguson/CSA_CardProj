import { Deck } from '@/types/flashcard';

export const entityFrameworkCore: Deck = {
  id: '6',
  name: 'Entity Framework Core',
  description: 'EF Core concepts for database operations',
  category: 'EF Core',
  cards: [
    {
      id: '6-1',
      question: 'What is Entity Framework Core?',
      answer: 'EF Core is an Object-Relational Mapper (ORM) that enables .NET developers to work with databases using .NET objects.',
      code: `public class AppDbContext : DbContext
{
  public DbSet<Product> Products { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['ef-core', 'orm', 'basics']
    },
    {
      id: '6-2',
      question: 'What is a DbContext in EF Core?',
      answer: 'DbContext is the primary class for interacting with the database. It represents a session with the database.',
      code: `public class MyDbContext : DbContext
{
  protected override void OnConfiguring(DbContextOptionsBuilder options)
      => options.UseSqlServer("connection-string");
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['dbcontext', 'basics', 'database']
    },
    {
      id: '6-3',
      question: 'What is a DbSet in EF Core?',
      answer: 'DbSet represents a collection of entities that can be queried from the database. Each DbSet corresponds to a table.',
      code: `public DbSet<Customer> Customers { get; set; }
public DbSet<Order> Orders { get; set; }`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['dbset', 'entities', 'basics']
    },
    {
      id: '6-4',
      question: 'What is an entity in EF Core?',
      answer: 'An entity is a class that maps to a database table. Each instance represents a row in the table.',
      code: `public class Product
{
  public int Id { get; set; }
  public string Name { get; set; }
  public decimal Price { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['entity', 'model', 'basics']
    },
    {
      id: '6-5',
      question: 'How do you add a new record in EF Core?',
      answer: 'Use the Add() method on DbSet, then call SaveChanges() to persist to the database.',
      code: `var product = new Product { Name = "Laptop" };
context.Products.Add(product);
context.SaveChanges();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['add', 'insert', 'crud']
    },
    {
      id: '6-6',
      question: 'How do you query data in EF Core?',
      answer: 'Use LINQ methods on DbSet to query data. Queries are executed when enumerated or when methods like ToList() are called.',
      code: `var products = context.Products
  .Where(p => p.Price > 100)
  .ToList();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['query', 'linq', 'read']
    },
    {
      id: '6-7',
      question: 'How do you update a record in EF Core?',
      answer: 'Retrieve the entity, modify its properties, then call SaveChanges() to update the database.',
      code: `var product = context.Products.Find(1);
product.Price = 150;
context.SaveChanges();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['update', 'modify', 'crud']
    },
    {
      id: '6-8',
      question: 'How do you delete a record in EF Core?',
      answer: 'Use the Remove() method on DbSet, then call SaveChanges() to delete from the database.',
      code: `var product = context.Products.Find(1);
context.Products.Remove(product);
context.SaveChanges();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['delete', 'remove', 'crud']
    },
    {
      id: '6-9',
      question: 'What is SaveChanges() in EF Core?',
      answer: 'SaveChanges() persists all changes made in the context to the database. It returns the number of affected rows.',
      code: `int rowsAffected = context.SaveChanges();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['savechanges', 'persist', 'basics']
    },
    {
      id: '6-10',
      question: 'What is a primary key in EF Core?',
      answer: 'A primary key uniquely identifies each record. By convention, a property named Id or ClassNameId is the primary key.',
      code: `public class Product
{
  public int Id { get; set; } // Primary key
  public string Name { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['primary-key', 'keys', 'basics']
    },
    {
      id: '6-11',
      question: 'What is the [Key] attribute in EF Core?',
      answer: 'The [Key] attribute explicitly marks a property as the primary key when it does not follow naming conventions.',
      code: `public class Product
{
  [Key]
  public int ProductCode { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['key', 'attributes', 'configuration']
    },
    {
      id: '6-12',
      question: 'What is the [Required] attribute in EF Core?',
      answer: 'The [Required] attribute makes a property non-nullable in the database. It is used for validation.',
      code: `public class Product
{
  [Required]
  public string Name { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['required', 'validation', 'attributes']
    },
    {
      id: '6-13',
      question: 'What is a migration in EF Core?',
      answer: 'A migration is a way to incrementally update the database schema to match changes in your model.',
      code: `// Command line
dotnet ef migrations add InitialCreate
dotnet ef database update`,
      language: 'bash',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['migrations', 'schema', 'database']
    },
    {
      id: '6-14',
      question: 'What is the difference between Add and AddRange?',
      answer: 'Add() adds a single entity. AddRange() adds multiple entities at once, which is more efficient.',
      code: `context.Products.Add(product);
context.Products.AddRange(product1, product2);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['add', 'addrange', 'crud']
    },
    {
      id: '6-15',
      question: 'What is eager loading in EF Core?',
      answer: 'Eager loading loads related data as part of the initial query using Include().',
      code: `var orders = context.Orders
  .Include(o => o.Customer)
  .ToList();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['eager-loading', 'include', 'relationships']
    },
    {
      id: '6-16',
      question: 'What is lazy loading in EF Core?',
      answer: 'Lazy loading automatically loads related data when it is accessed. Requires virtual navigation properties and a proxy.',
      code: `public class Order
{
  public virtual Customer Customer { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['lazy-loading', 'relationships', 'navigation']
    },
    {
      id: '6-17',
      question: 'What is a navigation property in EF Core?',
      answer: 'A navigation property defines a relationship between entities. It can be a reference or a collection.',
      code: `public class Order
{
  public Customer Customer { get; set; }
  public List<OrderItem> Items { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['navigation', 'relationships', 'basics']
    },
    {
      id: '6-18',
      question: 'What is a foreign key in EF Core?',
      answer: 'A foreign key is a property that references the primary key of another entity, establishing a relationship.',
      code: `public class Order
{
  public int CustomerId { get; set; }
  public Customer Customer { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['foreign-key', 'relationships', 'basics']
    },
    {
      id: '6-19',
      question: 'What is the Find() method in EF Core?',
      answer: 'Find() retrieves an entity by its primary key. It checks the context first before querying the database.',
      code: `var product = context.Products.Find(1);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['find', 'query', 'basics']
    },
    {
      id: '6-20',
      question: 'What is the difference between Find and FirstOrDefault?',
      answer: 'Find() searches by primary key and checks context first. FirstOrDefault() uses a predicate and always queries the database.',
      code: `var p1 = context.Products.Find(1);
var p2 = context.Products.FirstOrDefault(p => p.Id == 1);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['find', 'firstordefault', 'query']
    },
    {
      id: '6-21',
      question: 'What is AsNoTracking() in EF Core?',
      answer: 'AsNoTracking() returns entities that are not tracked by the context, improving performance for read-only queries.',
      code: `var products = context.Products
  .AsNoTracking()
  .ToList();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['asnotracking', 'performance', 'query']
    },
    {
      id: '6-22',
      question: 'What is the [Table] attribute in EF Core?',
      answer: 'The [Table] attribute specifies the database table name for an entity when it differs from the class name.',
      code: `[Table("tbl_Products")]
public class Product
{
  public int Id { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['table', 'attributes', 'configuration']
    },
    {
      id: '6-23',
      question: 'What is the [Column] attribute in EF Core?',
      answer: 'The [Column] attribute specifies the database column name for a property when it differs from the property name.',
      code: `public class Product
{
  [Column("product_name")]
  public string Name { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['column', 'attributes', 'configuration']
    },
    {
      id: '6-24',
      question: 'What is a one-to-many relationship in EF Core?',
      answer: 'A one-to-many relationship means one entity can be related to multiple entities of another type.',
      code: `public class Customer
{
  public List<Order> Orders { get; set; }
}
public class Order
{
  public Customer Customer { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['relationships', 'one-to-many', 'basics']
    },
    {
      id: '6-25',
      question: 'What is a one-to-one relationship in EF Core?',
      answer: 'A one-to-one relationship means each entity is related to exactly one entity of another type.',
      code: `public class User
{
  public UserProfile Profile { get; set; }
}
public class UserProfile
{
  public User User { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['relationships', 'one-to-one', 'basics']
    },
    {
      id: '6-26',
      question: 'What is the OnModelCreating method in EF Core?',
      answer: 'OnModelCreating is used to configure the model using Fluent API. It provides more control than attributes.',
      code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
  modelBuilder.Entity<Product>()
      .HasKey(p => p.Id);
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['onmodelcreating', 'fluent-api', 'configuration']
    },
    {
      id: '6-27',
      question: 'What is the difference between SaveChanges and SaveChangesAsync?',
      answer: 'SaveChanges() is synchronous. SaveChangesAsync() is asynchronous and should be used with await for better performance.',
      code: `context.SaveChanges();
await context.SaveChangesAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['savechanges', 'async', 'performance']
    },
    {
      id: '6-28',
      question: 'What is the [MaxLength] attribute in EF Core?',
      answer: 'The [MaxLength] attribute specifies the maximum length for a string or array property in the database.',
      code: `public class Product
{
  [MaxLength(100)]
  public string Name { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['maxlength', 'validation', 'attributes']
    },
    {
      id: '6-29',
      question: 'What is change tracking in EF Core?',
      answer: 'Change tracking monitors changes to entities so EF Core knows what to update in the database when SaveChanges() is called.',
      code: `var product = context.Products.Find(1);
product.Price = 200; // Tracked change
context.SaveChanges(); // Updates database`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['change-tracking', 'basics', 'context']
    },
    {
      id: '6-30',
      question: 'What is the difference between Update and Attach?',
      answer: 'Update() marks all properties as modified. Attach() marks the entity as unchanged. Use Update for disconnected scenarios.',
      code: `context.Products.Update(product); // All modified
context.Products.Attach(product); // Unchanged`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['update', 'attach', 'change-tracking']
    },
    {
      id: '6-31',
      question: 'What is AsNoTracking() in EF Core?',
      answer: 'AsNoTracking() returns entities without change tracking, improving performance for read-only queries.',
      code: `var products = context.Products.AsNoTracking().ToList();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['asnotracking', 'performance', 'queries']
    },
    {
      id: '6-32',
      question: 'What is a composite key in EF Core?',
      answer: 'A composite key uses multiple properties as the primary key. Configure using Fluent API.',
      code: `modelBuilder.Entity<OrderItem>()
  .HasKey(oi => new { oi.OrderId, oi.ProductId });`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['composite-key', 'fluent-api', 'keys']
    },
    {
      id: '6-33',
      question: 'What is the [NotMapped] attribute?',
      answer: '[NotMapped] excludes a property from being mapped to the database.',
      code: `public class Product
{
  [NotMapped]
  public string DisplayName { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['notmapped', 'attributes', 'mapping']
    },
    {
      id: '6-34',
      question: 'What is the [ForeignKey] attribute?',
      answer: '[ForeignKey] explicitly specifies which property is the foreign key for a navigation property.',
      code: `public class Order
{
  [ForeignKey("Customer")]
  public int CustomerId { get; set; }
  public Customer Customer { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['foreignkey', 'attributes', 'relationships']
    },
    {
      id: '6-35',
      question: 'What is the [Index] attribute?',
      answer: '[Index] creates a database index on one or more properties to improve query performance.',
      code: `[Index(nameof(Email), IsUnique = true)]
public class User
{
  public string Email { get; set; }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['index', 'attributes', 'performance']
    },
    {
      id: '6-36',
      question: 'What is explicit loading in EF Core?',
      answer: 'Explicit loading loads related data on demand using Load() method after the entity is retrieved.',
      code: `var customer = context.Customers.Find(1);
context.Entry(customer).Collection(c => c.Orders).Load();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['explicit-loading', 'relationships', 'loading']
    },
    {
      id: '6-37',
      question: 'What is the Entry() method?',
      answer: 'Entry() provides access to change tracking information and operations for an entity.',
      code: `var entry = context.Entry(product);
var state = entry.State;`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['entry', 'change-tracking', 'context']
    },
    {
      id: '6-38',
      question: 'What is a shadow property?',
      answer: 'Shadow properties exist in the EF Core model but not in the entity class. Configured via Fluent API.',
      code: `modelBuilder.Entity<Product>()
  .Property<DateTime>("LastModified");`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['shadow-property', 'fluent-api', 'advanced']
    },
    {
      id: '6-39',
      question: 'What is the HasData() method?',
      answer: 'HasData() seeds initial data into the database during migrations.',
      code: `modelBuilder.Entity<Product>().HasData(
  new Product { Id = 1, Name = "Product 1" }
);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['hasdata', 'seeding', 'migrations']
    },
    {
      id: '6-40',
      question: 'What is a value converter?',
      answer: 'Value converters transform property values when reading from or writing to the database.',
      code: `modelBuilder.Entity<Product>()
  .Property(p => p.Price)
  .HasConversion<decimal>();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['value-converter', 'conversion', 'advanced']
    },
    {
      id: '6-41',
      question: 'What is the ToListAsync() method?',
      answer: 'ToListAsync() asynchronously executes a query and returns results as a list.',
      code: `var products = await context.Products.ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['tolistasync', 'async', 'queries']
    },
    {
      id: '6-42',
      question: 'What is the SingleOrDefaultAsync() method?',
      answer: 'SingleOrDefaultAsync() returns the only element or null. Throws if more than one element exists.',
      code: `var product = await context.Products
  .SingleOrDefaultAsync(p => p.Id == 1);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['singleordefaultasync', 'async', 'queries']
    },
    {
      id: '6-43',
      question: 'What is the AnyAsync() method?',
      answer: 'AnyAsync() checks if any elements satisfy a condition without loading all data.',
      code: `bool exists = await context.Products
  .AnyAsync(p => p.Price > 100);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['anyasync', 'async', 'queries']
    },
    {
      id: '6-44',
      question: 'What is the CountAsync() method?',
      answer: 'CountAsync() returns the number of elements that satisfy a condition.',
      code: `int count = await context.Products.CountAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['countasync', 'async', 'queries']
    },
    {
      id: '6-45',
      question: 'What is the ExecuteDeleteAsync() method?',
      answer: 'ExecuteDeleteAsync() deletes entities matching a query without loading them into memory.',
      code: `await context.Products
  .Where(p => p.Price < 10)
  .ExecuteDeleteAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['executedeleteasync', 'bulk', 'performance']
    },
    {
      id: '6-46',
      question: 'What is the ExecuteUpdateAsync() method?',
      answer: 'ExecuteUpdateAsync() updates entities matching a query without loading them into memory.',
      code: `await context.Products
  .Where(p => p.Category == "Old")
  .ExecuteUpdateAsync(s => s.SetProperty(p => p.Category, "New"));`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['executeupdateasync', 'bulk', 'performance']
    },
    {
      id: '6-47',
      question: 'What is a DbContext transaction?',
      answer: 'Transactions ensure multiple operations succeed or fail together. Use BeginTransaction() for explicit transactions.',
      code: `using var transaction = context.Database.BeginTransaction();
try {
  context.SaveChanges();
  transaction.Commit();
} catch {
  transaction.Rollback();
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['transaction', 'database', 'consistency']
    },
    {
      id: '6-48',
      question: 'What is the Include() with ThenInclude()?',
      answer: 'ThenInclude() loads nested related data after an Include(). Used for multi-level relationships.',
      code: `var orders = context.Orders
  .Include(o => o.Customer)
      .ThenInclude(c => c.Address)
  .ToList();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['theninclude', 'eager-loading', 'relationships']
    },
    {
      id: '6-49',
      question: 'What is the Owned Entity Type?',
      answer: 'Owned entities are part of another entity and share the same table. Use OwnsOne() or OwnsMany().',
      code: `modelBuilder.Entity<Order>()
  .OwnsOne(o => o.ShippingAddress);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['owned-entity', 'fluent-api', 'relationships']
    },
    {
      id: '6-50',
      question: 'What is the difference between Add and AddRange?',
      answer: 'Add() adds a single entity. AddRange() adds multiple entities in one call, improving performance.',
      code: `context.Products.Add(product);
context.Products.AddRange(product1, product2, product3);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'easy',
      tags: ['add', 'addrange', 'crud']
    },
    {
      id: '6-51',
      question: 'How do you configure HasMany() with Fluent API?',
      answer: 'HasMany() configures a one-to-many relationship from the "one" side.',
      code: `modelBuilder.Entity<Customer>()
  .HasMany(c => c.Orders)
  .WithOne(o => o.Customer)
  .HasForeignKey(o => o.CustomerId);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['hasmany', 'fluent-api', 'relationships']
    },
    {
      id: '6-52',
      question: 'How do you configure HasOne() with Fluent API?',
      answer: 'HasOne() configures a one-to-one or many-to-one relationship.',
      code: `modelBuilder.Entity<Order>()
  .HasOne(o => o.Customer)
  .WithMany(c => c.Orders)
  .HasForeignKey(o => o.CustomerId)
  .OnDelete(DeleteBehavior.Restrict);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['hasone', 'fluent-api', 'relationships']
    },
    {
      id: '6-53',
      question: 'How do you configure a many-to-many relationship in EF Core?',
      answer: 'EF Core 5+ supports implicit many-to-many via collection navigation properties. Use Fluent API for join table configuration.',
      code: `// Implicit (EF Core 5+)
public class Student { public ICollection<Course> Courses { get; set; } }
public class Course  { public ICollection<Student> Students { get; set; } }

// Explicit join table
modelBuilder.Entity<Student>()
  .HasMany(s => s.Courses)
  .WithMany(c => c.Students)
  .UsingEntity(j => j.ToTable("StudentCourses"));`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['many-to-many', 'relationships', 'fluent-api']
    },
    {
      id: '6-54',
      question: 'How do you use Where() for filtering in EF Core?',
      answer: 'Where() translates a LINQ predicate to a SQL WHERE clause.',
      code: `var activeProducts = await context.Products
  .Where(p => p.IsActive && p.Price > 10)
  .OrderBy(p => p.Name)
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['where', 'linq', 'filtering']
    },
    {
      id: '6-55',
      question: 'How do you use Select() for projection in EF Core?',
      answer: 'Select() projects query results into a different shape, fetching only required columns.',
      code: `var names = await context.Products
  .Where(p => p.IsActive)
  .Select(p => new { p.Id, p.Name, p.Price })
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['select', 'projection', 'linq']
    },
    {
      id: '6-56',
      question: 'How do you use OrderBy() and OrderByDescending() in EF Core?',
      answer: 'OrderBy() sorts ascending. OrderByDescending() sorts descending. Use ThenBy() for secondary sorts.',
      code: `var products = await context.Products
  .OrderBy(p => p.Category)
  .ThenByDescending(p => p.Price)
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['orderby', 'sorting', 'linq']
    },
    {
      id: '6-57',
      question: 'How do you implement pagination with Skip() and Take()?',
      answer: 'Skip() skips N records; Take() fetches N records. Combine them for offset-based pagination.',
      code: `int page = 2, pageSize = 10;

var products = await context.Products
  .OrderBy(p => p.Id)
  .Skip((page - 1) * pageSize)
  .Take(pageSize)
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['pagination', 'skip', 'take']
    },
    {
      id: '6-58',
      question: 'How do you use GroupBy() in EF Core?',
      answer: 'GroupBy() groups results by a key. Use with aggregate functions like Count() or Sum().',
      code: `var grouped = await context.Orders
  .GroupBy(o => o.CustomerId)
  .Select(g => new
  {
      CustomerId = g.Key,
      OrderCount = g.Count(),
      TotalSpent = g.Sum(o => o.Total)
  })
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['groupby', 'aggregation', 'linq']
    },
    {
      id: '6-59',
      question: 'How do you use Sum(), Min(), Max(), and Average() in EF Core?',
      answer: 'These aggregate methods translate directly to SQL aggregates.',
      code: `decimal total   = await context.Orders.SumAsync(o => o.Total);
decimal cheapest = await context.Products.MinAsync(p => p.Price);
decimal priciest = await context.Products.MaxAsync(p => p.Price);
double avgPrice  = await context.Products.AverageAsync(p => (double)p.Price);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['aggregates', 'sum', 'linq']
    },
    {
      id: '6-60',
      question: 'How do you use FromSqlRaw() in EF Core?',
      answer: 'FromSqlRaw() allows raw SQL queries that return entities tracked by the context.',
      code: `var products = await context.Products
  .FromSqlRaw("SELECT * FROM Products WHERE Price > {0}", 100)
  .ToListAsync();

// Can chain LINQ after
var cheap = await context.Products
  .FromSqlRaw("SELECT * FROM Products")
  .Where(p => p.Price < 50)
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['fromsqlraw', 'raw-sql', 'queries']
    },
    {
      id: '6-61',
      question: 'How do you configure cascade delete with Fluent API?',
      answer: 'Use OnDelete() to set DeleteBehavior: Cascade, Restrict, SetNull, or NoAction.',
      code: `modelBuilder.Entity<Order>()
  .HasOne(o => o.Customer)
  .WithMany(c => c.Orders)
  .HasForeignKey(o => o.CustomerId)
  .OnDelete(DeleteBehavior.Cascade);   // Deleting Customer deletes Orders
  // or DeleteBehavior.Restrict        // Prevents delete if Orders exist
  // or DeleteBehavior.SetNull         // Sets FK to null on delete`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['cascade-delete', 'fluent-api', 'relationships']
    },
    {
      id: '6-62',
      question: 'How do you configure string max length with Fluent API?',
      answer: 'Use HasMaxLength() on the property builder in OnModelCreating.',
      code: `modelBuilder.Entity<Product>()
  .Property(p => p.Name)
  .HasMaxLength(100)
  .IsRequired();

modelBuilder.Entity<Product>()
  .Property(p => p.Description)
  .HasMaxLength(500)
  .IsRequired(false);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['hasmaxlength', 'fluent-api', 'configuration']
    },
    {
      id: '6-63',
      question: 'What is the difference between Code-First and Database-First?',
      answer: 'Code-First: you define C# classes and EF generates the database. Database-First: you scaffold classes from an existing database.',
      code: `// Code-First: define model, then migrate
dotnet ef migrations add InitialCreate
dotnet ef database update

// Database-First: scaffold from existing DB
dotnet ef dbcontext scaffold "ConnectionString" \\
  Microsoft.EntityFrameworkCore.SqlServer \\
  -o Models`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['code-first', 'database-first', 'migrations']
    },
    {
      id: '6-64',
      question: 'How do you register DbContext with Dependency Injection?',
      answer: 'Use AddDbContext<T>() in Program.cs, specifying the provider and connection string.',
      code: `// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
  options.UseSqlServer(
      builder.Configuration.GetConnectionString("DefaultConnection")));

// appsettings.json
{
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=MyDb;Trusted_Connection=True;"
}
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['dependency-injection', 'dbcontext', 'configuration']
    },
    {
      id: '6-65',
      question: 'How do you use the IEntityTypeConfiguration<T> interface?',
      answer: 'IEntityTypeConfiguration<T> lets you split Fluent API configuration into separate files.',
      code: `public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
  public void Configure(EntityTypeBuilder<Product> builder)
  {
      builder.HasKey(p => p.Id);
      builder.Property(p => p.Name).HasMaxLength(100).IsRequired();
      builder.HasIndex(p => p.Sku).IsUnique();
  }
}

// In OnModelCreating
modelBuilder.ApplyConfiguration(new ProductConfiguration());
// Or apply all at once:
modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['configuration', 'fluent-api', 'ientitytypeconfiguration']
    },
    {
      id: '6-66',
      question: 'How do you use the In-Memory provider for testing?',
      answer: 'Install Microsoft.EntityFrameworkCore.InMemory and configure it in test setup.',
      code: `var options = new DbContextOptionsBuilder<AppDbContext>()
  .UseInMemoryDatabase("TestDb")
  .Options;

using var context = new AppDbContext(options);
context.Products.Add(new Product { Name = "Test", Price = 10 });
await context.SaveChangesAsync();

var products = await context.Products.ToListAsync();
Assert.Single(products);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['in-memory', 'testing', 'unit-tests']
    },
    {
      id: '6-67',
      question: 'How do you track entity state manually in EF Core?',
      answer: 'Use context.Entry().State to manually set entity tracking state.',
      code: `var product = new Product { Id = 1, Name = "Updated Name", Price = 99 };

// Attach and mark as modified (for disconnected scenarios)
context.Entry(product).State = EntityState.Modified;
await context.SaveChangesAsync();

// Check state
var entry = context.Entry(product);
Console.WriteLine(entry.State); // Modified, Added, Deleted, Unchanged, Detached`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['entity-state', 'change-tracking', 'disconnected']
    },
    {
      id: '6-68',
      question: 'How do you query related data with projection (no Include)?',
      answer: 'Use Select() to project related data directly, avoiding separate Include() queries.',
      code: `var result = await context.Orders
  .Select(o => new OrderDto
  {
      Id = o.Id,
      Total = o.Total,
      CustomerName = o.Customer.Name,    // No Include needed
      ItemCount = o.Items.Count()
  })
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['projection', 'select', 'performance']
    },
    {
      id: '6-69',
      question: 'How do you use the [DatabaseGenerated] attribute?',
      answer: '[DatabaseGenerated] controls how a column value is generated by the database.',
      code: `public class Product
{
  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  public int Id { get; set; }

  [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
  public DateTime LastModified { get; set; }

  [DatabaseGenerated(DatabaseGeneratedOption.None)]
  public Guid ExternalId { get; set; } // Set manually
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['databasegenerated', 'attributes', 'keys']
    },
    {
      id: '6-70',
      question: 'How do you configure a default column value in EF Core?',
      answer: 'Use HasDefaultValue() or HasDefaultValueSql() in Fluent API.',
      code: `modelBuilder.Entity<Product>()
  .Property(p => p.CreatedAt)
  .HasDefaultValueSql("GETUTCDATE()");

modelBuilder.Entity<Product>()
  .Property(p => p.IsActive)
  .HasDefaultValue(true);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['default-value', 'fluent-api', 'configuration']
    },
    {
      id: '6-71',
      question: 'How do you apply all entity configurations from an assembly?',
      answer: 'Use ApplyConfigurationsFromAssembly() to automatically apply all IEntityTypeConfiguration<T> classes.',
      code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
  modelBuilder.ApplyConfigurationsFromAssembly(
      typeof(AppDbContext).Assembly);
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['configuration', 'assembly', 'fluent-api']
    },
    {
      id: '6-72',
      question: 'How do you revert a migration in EF Core?',
      answer: 'Use dotnet ef database update <PreviousMigrationName> to roll back, then remove the latest migration.',
      code: `# Roll back to a specific migration
dotnet ef database update PreviousMigrationName

# Remove the last migration file
dotnet ef migrations remove

# List all migrations
dotnet ef migrations list`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['migrations', 'rollback', 'database']
    },
    {
      id: '6-73',
      question: 'What is the difference between FirstOrDefaultAsync and SingleOrDefaultAsync?',
      answer: 'FirstOrDefaultAsync returns the first match (no error on multiple). SingleOrDefaultAsync throws if more than one record matches.',
      code: `// Returns first product with price > 10 (no error if many match)
var first = await context.Products
  .FirstOrDefaultAsync(p => p.Price > 10);

// Returns exactly one, throws InvalidOperationException if > 1 match
var single = await context.Products
  .SingleOrDefaultAsync(p => p.Sku == "ABC-123");`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['firstordefault', 'singleordefault', 'queries']
    },
    {
      id: '6-74',
      question: 'How do you use DbContext.Database.ExecuteSqlRawAsync()?',
      answer: 'ExecuteSqlRawAsync() runs non-query SQL (INSERT/UPDATE/DELETE) and returns affected row count.',
      code: `int rows = await context.Database.ExecuteSqlRawAsync(
  "UPDATE Products SET IsActive = 0 WHERE Price < {0}", 5.00m);

Console.WriteLine($"{rows} rows updated");`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['executesqlrawasync', 'raw-sql', 'database']
    },
    {
      id: '6-75',
      question: 'How do you use DbContext pooling for performance?',
      answer: 'AddDbContextPool<T>() reuses DbContext instances, reducing allocation overhead in high-throughput apps.',
      code: `// Program.cs
builder.Services.AddDbContextPool<AppDbContext>(options =>
  options.UseSqlServer(connectionString),
  poolSize: 128); // default is 1024

// Note: Do not store state on the context when using pooling
// The context is reset between uses`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'medium',
      tags: ['dbcontext-pool', 'performance', 'dependency-injection']
    },
    {
      id: '6-76',
      question: 'What is a Global Query Filter in EF Core?',
      answer: 'Global Query Filters add a WHERE condition to all queries for an entity type automatically.',
      code: `protected override void OnModelCreating(ModelBuilder modelBuilder)
{
  // Always filter out soft-deleted records
  modelBuilder.Entity<Product>()
      .HasQueryFilter(p => !p.IsDeleted);
}

// Normal query - IsDeleted = false is added automatically
var products = await context.Products.ToListAsync();

// Bypass the filter
var all = await context.Products.IgnoreQueryFilters().ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['global-query-filter', 'soft-delete', 'advanced']
    },
    {
      id: '6-77',
      question: 'How do you implement soft delete with a global query filter?',
      answer: 'Add IsDeleted flag, set it in an overridden SaveChangesAsync(), and add a global filter.',
      code: `public class AppDbContext : DbContext
{
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
      modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);
  }

  public override Task<int> SaveChangesAsync(CancellationToken ct = default)
  {
      foreach (var entry in ChangeTracker.Entries<ISoftDelete>()
          .Where(e => e.State == EntityState.Deleted))
      {
          entry.State = EntityState.Modified;
          entry.Entity.IsDeleted = true;
      }
      return base.SaveChangesAsync(ct);
  }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['soft-delete', 'savechanges', 'global-filter']
    },
    {
      id: '6-78',
      question: 'What is TPH (Table Per Hierarchy) inheritance in EF Core?',
      answer: 'TPH maps all types in an inheritance hierarchy to a single table with a discriminator column.',
      code: `public class Animal  { public int Id { get; set; } public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }
public class Cat : Animal { public bool IsIndoor { get; set; } }

// EF Core default: single Animals table with Discriminator column
// Query specific type
var dogs = await context.Animals.OfType<Dog>().ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['tph', 'inheritance', 'table-mapping']
    },
    {
      id: '6-79',
      question: 'What is TPT (Table Per Type) inheritance in EF Core?',
      answer: 'TPT maps each type in the hierarchy to its own table. Base properties in base table, derived in separate tables.',
      code: `[Table("Animals")]
public class Animal  { public int Id { get; set; } public string Name { get; set; } }

[Table("Dogs")]
public class Dog : Animal { public string Breed { get; set; } }

[Table("Cats")]
public class Cat : Animal { public bool IsIndoor { get; set; } }

// Or via Fluent API
modelBuilder.Entity<Dog>().ToTable("Dogs");
modelBuilder.Entity<Cat>().ToTable("Cats");`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['tpt', 'inheritance', 'table-mapping']
    },
    {
      id: '6-80',
      question: 'What is TPC (Table Per Concrete Type) in EF Core?',
      answer: 'TPC maps each concrete class to its own table. All properties (including inherited) are stored in each table. No joins needed.',
      code: `public abstract class Animal { public int Id { get; set; } public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }
public class Cat : Animal { public bool IsIndoor { get; set; } }

// Configure TPC
modelBuilder.Entity<Dog>().UseTpcMappingStrategy();
modelBuilder.Entity<Cat>().UseTpcMappingStrategy();

// Dogs table: Id, Name, Breed
// Cats table: Id, Name, IsIndoor
// No shared Animals table`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['tpc', 'inheritance', 'table-mapping']
    },
    {
      id: '6-81',
      question: 'How do you implement optimistic concurrency with [Timestamp]?',
      answer: 'Add a byte[] RowVersion property with [Timestamp]. EF Core checks it on every UPDATE.',
      code: `public class Product
{
  public int Id { get; set; }
  public string Name { get; set; }

  [Timestamp]
  public byte[] RowVersion { get; set; }
}

// EF Core adds WHERE RowVersion = @originalValue to UPDATE
// Throws DbUpdateConcurrencyException if another update happened
try
{
  await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
  // Handle conflict: reload and retry or notify user
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['optimistic-concurrency', 'rowversion', 'timestamp']
    },
    {
      id: '6-82',
      question: 'How do you handle concurrency conflicts in EF Core?',
      answer: 'Catch DbUpdateConcurrencyException and resolve by keeping client, database, or merged values.',
      code: `try
{
  await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
  var entry = ex.Entries.Single();
  var dbValues = await entry.GetDatabaseValuesAsync();

  if (dbValues == null)
  {
      // Entity deleted by another user
      return;
  }

  // Overwrite with database values (database wins)
  entry.OriginalValues.SetValues(dbValues);
  await context.SaveChangesAsync();
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['concurrency', 'conflict-resolution', 'savechanges']
    },
    {
      id: '6-83',
      question: 'What is table splitting in EF Core?',
      answer: 'Table splitting maps multiple entity types to the same database table, sharing the primary key.',
      code: `public class Order { public int Id { get; set; } public decimal Total { get; set; } }
public class OrderDetails { public int Id { get; set; } public string ShippingAddress { get; set; } }

modelBuilder.Entity<Order>().ToTable("Orders");
modelBuilder.Entity<OrderDetails>().ToTable("Orders");

modelBuilder.Entity<Order>()
  .HasOne(o => o.Details)
  .WithOne()
  .HasForeignKey<OrderDetails>(d => d.Id);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['table-splitting', 'fluent-api', 'advanced']
    },
    {
      id: '6-84',
      question: 'What is a compiled query in EF Core?',
      answer: 'Compiled queries cache query compilation, eliminating repeated translation overhead for frequently used queries.',
      code: `private static readonly Func<AppDbContext, int, Task<Product?>> GetByIdQuery =
  EF.CompileAsyncQuery((AppDbContext db, int id) =>
      db.Products.FirstOrDefault(p => p.Id == id));

// Usage - no re-compilation on each call
var product = await GetByIdQuery(context, 5);`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['compiled-query', 'performance', 'advanced']
    },
    {
      id: '6-85',
      question: 'What is the difference between IQueryable<T> and IEnumerable<T> in EF Core?',
      answer: 'IQueryable builds the query in the database (SQL). IEnumerable loads all data into memory first, then filters in C#.',
      code: `// IQueryable - filtering happens in SQL
IQueryable<Product> query = context.Products;
var cheap = await query.Where(p => p.Price < 50).ToListAsync(); // One SQL query

// IEnumerable - ALL products loaded first, THEN filtered in memory
IEnumerable<Product> allInMemory = await context.Products.ToListAsync();
var cheapInMemory = allInMemory.Where(p => p.Price < 50); // Inefficient!`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['iqueryable', 'ienumerable', 'performance']
    },
    {
      id: '6-86',
      question: 'What is the N+1 query problem in EF Core and how do you fix it?',
      answer: 'N+1 occurs when you execute 1 query then N queries in a loop. Fix with Include() (eager loading).',
      code: `// BAD - N+1: 1 query for customers + N queries for orders
var customers = await context.Customers.ToListAsync();
foreach (var c in customers)
  Console.WriteLine(c.Orders.Count); // Triggers separate SQL per customer!

// GOOD - 1 query with JOIN
var customers = await context.Customers
  .Include(c => c.Orders)
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['n-plus-1', 'performance', 'include']
    },
    {
      id: '6-87',
      question: 'How do you map an entity to a database view?',
      answer: 'Use ToView() in Fluent API. Views are read-only by default.',
      code: `public class ProductSummary
{
  public int Id { get; set; }
  public string Name { get; set; }
  public int OrderCount { get; set; }
}

modelBuilder.Entity<ProductSummary>()
  .HasNoKey()
  .ToView("vw_ProductSummary");

// Query the view
var summaries = await context.Set<ProductSummary>().ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['views', 'toview', 'read-only']
    },
    {
      id: '6-88',
      question: 'How do you implement audit trails (CreatedAt/UpdatedAt) in EF Core?',
      answer: 'Override SaveChangesAsync() and set timestamps for Added/Modified entities.',
      code: `public interface IAuditable
{
  DateTime CreatedAt { get; set; }
  DateTime UpdatedAt { get; set; }
}

public override Task<int> SaveChangesAsync(CancellationToken ct = default)
{
  var now = DateTime.UtcNow;
  foreach (var entry in ChangeTracker.Entries<IAuditable>())
  {
      if (entry.State == EntityState.Added)
          entry.Entity.CreatedAt = now;
      if (entry.State is EntityState.Added or EntityState.Modified)
          entry.Entity.UpdatedAt = now;
  }
  return base.SaveChangesAsync(ct);
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['audit', 'savechanges', 'timestamps']
    },
    {
      id: '6-89',
      question: 'What is query splitting for collection includes?',
      answer: 'AsSplitQuery() splits a query with multiple collection includes into separate SQL queries, avoiding cartesian explosion.',
      code: `// Single query (cartesian explosion risk with many includes)
var orders = await context.Orders
  .Include(o => o.Items)
  .Include(o => o.Tags)
  .ToListAsync();

// Split queries (separate SQL per include, better for large collections)
var orders = await context.Orders
  .Include(o => o.Items)
  .Include(o => o.Tags)
  .AsSplitQuery()
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['split-query', 'performance', 'include']
    },
    {
      id: '6-90',
      question: 'How do you use EF Core with savepoints in transactions?',
      answer: 'Savepoints let you roll back to a point within a transaction without aborting the whole transaction.',
      code: `await using var transaction = await context.Database.BeginTransactionAsync();

context.Products.Add(new Product { Name = "A" });
await context.SaveChangesAsync();
await transaction.CreateSavepointAsync("AfterA");

try
{
  context.Products.Add(new Product { Name = "B", Price = -1 }); // bad
  await context.SaveChangesAsync();
}
catch
{
  await transaction.RollbackToSavepointAsync("AfterA");
}

await transaction.CommitAsync(); // Only "A" is saved`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['transactions', 'savepoints', 'advanced']
    },
    {
      id: '6-91',
      question: 'What is an EF Core interceptor?',
      answer: 'Interceptors hook into EF Core operations (commands, connections, SaveChanges) to add cross-cutting logic.',
      code: `public class QueryLoggingInterceptor : DbCommandInterceptor
{
  public override ValueTask<DbDataReader> ReaderExecutedAsync(
      DbCommand command,
      CommandExecutedEventData eventData,
      DbDataReader result,
      CancellationToken cancellationToken = default)
  {
      Console.WriteLine($"Query took {eventData.Duration.TotalMs}ms");
      return new ValueTask<DbDataReader>(result);
  }
}

// Register
builder.Services.AddDbContext<AppDbContext>(o => o
  .UseSqlServer(connStr)
  .AddInterceptors(new QueryLoggingInterceptor()));`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['interceptors', 'advanced', 'logging']
    },
    {
      id: '6-92',
      question: 'How do you configure a many-to-many relationship with a payload (extra columns)?',
      answer: 'Create an explicit join entity with the extra columns and configure it with HasMany/WithMany via the join entity.',
      code: `public class Student   { public int Id { get; set; } public ICollection<Enrollment> Enrollments { get; set; } }
public class Course    { public int Id { get; set; } public ICollection<Enrollment> Enrollments { get; set; } }
public class Enrollment
{
  public int StudentId { get; set; } public Student Student { get; set; }
  public int CourseId  { get; set; } public Course  Course  { get; set; }
  public DateTime EnrolledAt { get; set; } // payload
  public decimal Grade { get; set; }        // payload
}

modelBuilder.Entity<Enrollment>().HasKey(e => new { e.StudentId, e.CourseId });`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['many-to-many', 'join-entity', 'payload']
    },
    {
      id: '6-93',
      question: 'What is the IDbContextFactory<T> and when should you use it?',
      answer: 'IDbContextFactory<T> creates DbContext instances on demand. Use in background services or Blazor where DI-scoped contexts are unsafe.',
      code: `// Register
builder.Services.AddDbContextFactory<AppDbContext>(options =>
  options.UseSqlServer(connectionString));

// Usage in background service
public class ReportService
{
  private readonly IDbContextFactory<AppDbContext> _factory;
  public ReportService(IDbContextFactory<AppDbContext> factory)
      => _factory = factory;

  public async Task RunAsync()
  {
      await using var context = await _factory.CreateDbContextAsync();
      var report = await context.Orders.SumAsync(o => o.Total);
  }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['dbcontextfactory', 'background-services', 'advanced']
    },
    {
      id: '6-94',
      question: 'How do you use EF Core with database functions (UDFs)?',
      answer: 'Map user-defined functions with [DbFunction] or HasDbFunction() in Fluent API.',
      code: `public static class DbFunctions
{
  [DbFunction("CalculateDiscount", "dbo")]
  public static decimal CalculateDiscount(decimal price, int qty) =>
      throw new NotSupportedException(); // Translated to SQL, never runs in C#
}

// In OnModelCreating
modelBuilder.HasDbFunction(
  typeof(DbFunctions).GetMethod(nameof(DbFunctions.CalculateDiscount))!);

// Use in LINQ
var result = await context.Products
  .Select(p => new { p.Name, Discount = DbFunctions.CalculateDiscount(p.Price, 5) })
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['database-functions', 'udf', 'linq']
    },
    {
      id: '6-95',
      question: 'What is the ModelSnapshot in EF Core migrations?',
      answer: 'ModelSnapshot is an auto-generated C# file that represents the current state of the model. EF Core uses it to compute migration diffs.',
      code: `// AppDbContextModelSnapshot.cs (auto-generated, do not edit manually)
[DbContext(typeof(AppDbContext))]
partial class AppDbContextModelSnapshot : ModelSnapshot
{
  protected override void BuildModel(ModelBuilder modelBuilder)
  {
      modelBuilder.Entity("Product", b =>
      {
          b.Property<int>("Id").ValueGeneratedOnAdd();
          b.Property<string>("Name").HasMaxLength(100);
          b.HasKey("Id");
          b.ToTable("Products");
      });
  }
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['model-snapshot', 'migrations', 'advanced']
    },
    {
      id: '6-96',
      question: 'How do you configure value objects as owned entities?',
      answer: 'Use OwnsOne() to embed a value object (e.g., Address) as owned columns in the owning entity table.',
      code: `public class Order
{
  public int Id { get; set; }
  public Address ShippingAddress { get; set; }
}
public class Address
{
  public string Street { get; set; }
  public string City { get; set; }
  public string PostalCode { get; set; }
}

modelBuilder.Entity<Order>().OwnsOne(o => o.ShippingAddress, sa =>
{
  sa.Property(a => a.Street).HasColumnName("ShipStreet").HasMaxLength(200);
  sa.Property(a => a.City).HasColumnName("ShipCity").HasMaxLength(100);
});`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['owned-entities', 'value-objects', 'fluent-api']
    },
    {
      id: '6-97',
      question: 'How do you use FromSqlInterpolated() safely in EF Core?',
      answer: 'FromSqlInterpolated() uses parameterized SQL automatically, preventing SQL injection from interpolated values.',
      code: `string category = userInput; // potentially unsafe input
decimal minPrice = 10m;

// SAFE - values are parameterized automatically
var products = await context.Products
  .FromSqlInterpolated(
      $"SELECT * FROM Products WHERE Category = {category} AND Price > {minPrice}")
  .ToListAsync();

// Equivalent to:
// SELECT * FROM Products WHERE Category = @p0 AND Price > @p1`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['fromsqlinterpolated', 'sql-injection', 'security']
    },
    {
      id: '6-98',
      question: 'How do you use EF Core with JSON columns?',
      answer: 'EF Core 7+ supports mapping JSON columns to C# types using ToJson() in Fluent API.',
      code: `public class Product
{
  public int Id { get; set; }
  public string Name { get; set; }
  public ProductMetadata Metadata { get; set; } // stored as JSON
}
public class ProductMetadata
{
  public string[] Tags { get; set; }
  public Dictionary<string, string> Attributes { get; set; }
}

modelBuilder.Entity<Product>().OwnsOne(p => p.Metadata, m => m.ToJson());

// Query JSON properties in LINQ
var tagged = await context.Products
  .Where(p => p.Metadata.Tags.Contains("sale"))
  .ToListAsync();`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['json-columns', 'ef-core-7', 'advanced']
    },
    {
      id: '6-99',
      question: 'How do you use ExecuteUpdate() for bulk updates without loading entities?',
      answer: 'ExecuteUpdate() (EF Core 7+) runs a SET query directly without loading entities into memory.',
      code: `// Update all products in a category without loading them
int updated = await context.Products
  .Where(p => p.Category == "Electronics")
  .ExecuteUpdateAsync(setters => setters
      .SetProperty(p => p.IsActive, false)
      .SetProperty(p => p.UpdatedAt, DateTime.UtcNow));

Console.WriteLine($"{updated} products deactivated");`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['executeupdate', 'bulk', 'ef-core-7']
    },
    {
      id: '6-100',
      question: 'How do you implement a generic repository with EF Core?',
      answer: 'Create a generic repository class with common CRUD methods backed by DbSet<T>.',
      code: `public class Repository<T> where T : class
{
  protected readonly AppDbContext _db;
  protected readonly DbSet<T> _set;

  public Repository(AppDbContext db) { _db = db; _set = db.Set<T>(); }

  public async Task<T?> GetByIdAsync(int id) => await _set.FindAsync(id);
  public async Task<List<T>> GetAllAsync() => await _set.ToListAsync();
  public async Task AddAsync(T entity) => await _set.AddAsync(entity);
  public void Delete(T entity) => _set.Remove(entity);
  public async Task SaveAsync() => await _db.SaveChangesAsync();
}`,
      language: 'csharp',
      category: 'EF Core',
      difficulty: 'hard',
      tags: ['generic-repository', 'patterns', 'design']
    }
  ]
};
