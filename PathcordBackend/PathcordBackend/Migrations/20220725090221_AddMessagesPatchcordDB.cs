using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PathcordBackend.Migrations
{
    public partial class AddMessagesPatchcordDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    MessageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ChannelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    DataStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.MessageId);
                    table.ForeignKey(
                        name: "FK_Messages_Channels_ChannelId",
                        column: x => x.ChannelId,
                        principalTable: "Channels",
                        principalColumn: "ChannelId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Messages",
                columns: new[] { "MessageId", "ChannelId", "DataStamp", "Text", "UserId" },
                values: new object[,]
                {
                    { 1, 2, new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7870), "Hello, World!", 1 },
                    { 2, 2, new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7873), "How are y'all?", 1 },
                    { 3, 2, new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7874), "Pretty good, thanks!", 2 },
                    { 4, 1, new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7874), "Why is this chat so empty?", 3 }
                });

            migrationBuilder.InsertData(
                table: "Subscriptions",
                columns: new[] { "ChannelId", "UserId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 2, 1 },
                    { 1, 2 },
                    { 1, 3 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ChannelId",
                table: "Messages",
                column: "ChannelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DeleteData(
                table: "Subscriptions",
                keyColumns: new[] { "ChannelId", "UserId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "Subscriptions",
                keyColumns: new[] { "ChannelId", "UserId" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "Subscriptions",
                keyColumns: new[] { "ChannelId", "UserId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "Subscriptions",
                keyColumns: new[] { "ChannelId", "UserId" },
                keyValues: new object[] { 1, 3 });
        }
    }
}
