﻿// <auto-generated />
using BackEnd;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackEnd.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20211227062324_tablasPrincipales")]
    partial class tablasPrincipales
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BackEnd.Models.Articulo", b =>
                {
                    b.Property<int>("IdArticulo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(50)");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("VARCHAR(MAX)");

                    b.Property<decimal>("Precio")
                        .HasColumnType("DECIMAL(18,2)");

                    b.Property<int>("Stock")
                        .HasColumnType("INT");

                    b.HasKey("IdArticulo");

                    b.ToTable("articulo");
                });

            modelBuilder.Entity("BackEnd.Models.Cliente", b =>
                {
                    b.Property<int>("IdCliente")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("VARCHAR(30)");

                    b.Property<string>("Direccion")
                        .IsRequired()
                        .HasColumnType("VARCHAR(MAX)");

                    b.Property<string>("Nombres")
                        .IsRequired()
                        .HasColumnType("VARCHAR(30)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("VARCHAR(30)");

                    b.Property<string>("Usuario")
                        .IsRequired()
                        .HasColumnType("VARCHAR(30)");

                    b.HasKey("IdCliente");

                    b.ToTable("cliente");
                });

            modelBuilder.Entity("BackEnd.Models.Tienda", b =>
                {
                    b.Property<int>("IdSucursal")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Direccion")
                        .IsRequired()
                        .HasColumnType("VARCHAR(MAX)");

                    b.Property<string>("Sucursal")
                        .IsRequired()
                        .HasColumnType("VARCHAR(30)");

                    b.HasKey("IdSucursal");

                    b.ToTable("tienda");
                });
#pragma warning restore 612, 618
        }
    }
}
