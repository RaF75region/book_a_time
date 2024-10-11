using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace book_a_time.grpc.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnPhoto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UrlPhoto",
                table: "Users",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UrlPhoto",
                table: "Users");
        }
    }
}
