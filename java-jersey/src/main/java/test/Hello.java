package test;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.Context;

@Path("/")
public class Hello {
	@POST
	@Produces(MediaType.TEXT_HTML)
	@Consumes(MediaType.TEXT_PLAIN)
	public String sayHelloPost(String name, @Context HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		String resource = "Hello " +  name + ". Your are a Post Requester. Success from the Java Server";
		return resource;
	}

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String sayHelloHTML(@Context HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		String resource = "Hello Unknown Get Requester. Success from the Java Server";
		return resource;
	}
}  