using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Cliente
    {
        [Key]
        public int IdCliente { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(30)")]
        public String Nombres { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(30)")]
        public String Apellidos { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(MAX)")]
        public String Direccion { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(30)")]
        public String Usuario { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(30)")]
        public String Password { get; set; }
    }
}
