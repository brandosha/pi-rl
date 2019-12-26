import * as tf from "@tensorflow/tfjs"

tf.tensor1d([1, 4, 1]).add(tf.tensor1d([4, 1, 4])).print()