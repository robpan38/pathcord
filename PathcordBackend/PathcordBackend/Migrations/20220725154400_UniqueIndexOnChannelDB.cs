using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PathcordBackend.Migrations
{
    public partial class UniqueIndexOnChannelDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Channels",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 1,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 15, 43, 59, 979, DateTimeKind.Utc).AddTicks(8458));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 2,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 15, 43, 59, 979, DateTimeKind.Utc).AddTicks(8460));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 3,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 15, 43, 59, 979, DateTimeKind.Utc).AddTicks(8461));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 4,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 15, 43, 59, 979, DateTimeKind.Utc).AddTicks(8462));

            migrationBuilder.CreateIndex(
                name: "Ix_Channel_Name",
                table: "Channels",
                column: "Name",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "Ix_Channel_Name",
                table: "Channels");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Channels",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 1,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 14, 24, 0, 340, DateTimeKind.Utc).AddTicks(2620));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 2,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 14, 24, 0, 340, DateTimeKind.Utc).AddTicks(2622));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 3,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 14, 24, 0, 340, DateTimeKind.Utc).AddTicks(2623));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "TextMessageId",
                keyValue: 4,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 14, 24, 0, 340, DateTimeKind.Utc).AddTicks(2623));
        }
    }
}
