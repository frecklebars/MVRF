from keras import models
from keras import layers
from keras import optimizers

import numpy as np

X = np.array([[0, 0],
              [0, 1],
              [1, 0],
              [1, 1]])

y = np.array([0, 1, 1, 0])

model = models.Sequential() #simple stack of layers

model.add(layers.Dense(10, activation="tanh", input_dim=2))
model.add(layers.Dense(1, activation="sigmoid"))

# stochastic gradient descent (the thing with the derivatives)
sgd = optimizers.SGD(lr=0.5)

model.compile(loss="mean_squared_error",
              optimizer=sgd,
              metrics=["accuracy"])
# metrics are a bunch of data we tell the model to collect

model.fit(X, y, epochs=500, verbose=2)
# verbosity tells u stuff about the training

print(model.predict(X))