using Microsoft.EntityFrameworkCore;
using TdoApi.models;

namespace TdoApi.database
{
    public class TodoDb : DbContext
    {
        public TodoDb(DbContextOptions<TodoDb> options): base(options) { }

        public DbSet<Todo> Todos => Set<Todo>();
    }
}
