using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using PathcordBackend.DbContexts;
using PathcordBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// add SQL Server service using the PathcordContext constructor with the necessary connection string
builder.Services.AddDbContext<PathcordContext>(
    dbContextOptions => dbContextOptions.UseSqlServer(
        builder.Configuration.GetConnectionString("PathcordDB")
    )
);

// add service for the repository
builder.Services.AddScoped<IPathcordRepository, PathcordRepository>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// build the app
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

//app.MapControllers();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
