using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PathcordBackend.Migrations
{
    public partial class RedoDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MessageId",
                table: "Messages",
                newName: "TextMessageId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TextMessageId",
                table: "Messages",
                newName: "MessageId");

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 1,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7870));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 2,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7873));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 3,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7874));

            migrationBuilder.UpdateData(
                table: "Messages",
                keyColumn: "MessageId",
                keyValue: 4,
                column: "DataStamp",
                value: new DateTime(2022, 7, 25, 9, 2, 21, 79, DateTimeKind.Utc).AddTicks(7874));
        }
    }
}
