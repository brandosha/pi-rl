import * as tf from "@tensorflow/tfjs"
import * as http from "http"

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
})

app.listen(8000, '0.0.0.0');

// tf.tensor1d([1, 4, 1]).add(tf.tensor1d([4, 1, 4])).print()