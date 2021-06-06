using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace NameHello.Controllers
{
    [ApiController]
    [Route("")]
    public class NameHelloController: ControllerBase
    {
       

        [HttpGet]
         public ActionResult<List<NameHello>> Get()
        {
            return Ok(new NameHello {
                data="Hello Unknown Get Requester. Success from the C# Server"
            });
        }

        [HttpPost]
         public ActionResult<NameHello> Post(NameHello data)
    
        {
            
            return Ok(new NameHello {
                data="Hello " + data.data + ". Your are a Post Requester. Success from the C# Server"
            });
        }
    }
}