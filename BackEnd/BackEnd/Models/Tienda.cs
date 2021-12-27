using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Tienda
    {
        [Key]
        public int IdSucursal { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(30)")]
        public String Sucursal { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(MAX)")]
        public String Direccion { get; set; }
    }
}
