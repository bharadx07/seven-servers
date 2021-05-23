package main

import (
	"io"
	"net/http"
	"encoding/json"	
)


func main()  {
	http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")

		if r.Method == http.MethodGet {
			io.WriteString(w, "Hello Unknown Get Requester. Success from the Go Server")
		} else if r.Method == http.MethodPost {
			var body struct {
				Name string `json:"name"`
			}
	
			err := json.NewDecoder(r.Body).Decode(&body)
			if err != nil {
				w.WriteHeader(http.StatusNotAcceptable)
				return
			}
	
			io.WriteString(w, "Hello " + body.Name + ". Your are a Post Requester. Success from the Go Server")
		} else {
			io.WriteString(w, "404 Not Found")
		}
	})

	http.ListenAndServe(":5050", nil)
}

