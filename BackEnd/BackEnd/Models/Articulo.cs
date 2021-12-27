using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Articulo
    {
        [Key]
        public int IdArticulo { set; get; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Codigo { set; get; }

        [Required]
        [Column(TypeName = "VARCHAR(MAX)")]
        public string Descripcion { set; get; }

        [Required]
        [Column(TypeName = "DECIMAL(18,2)")]
        public decimal Precio { set; get; }

        //[Required]
        //[Column(TypeName = "IMAGE")]
        //public byte[] Imagen { set; get; }

        [Required]
        [Column(TypeName = "INT")]
        public int Stock { set; get; }
    }
}
