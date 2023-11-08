
var network = new brain.NeuralNetwork();

network.train([
    { input: { SepalLength: 5.1, SepalWidth: 3.5, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.9, SepalWidth: 3.0, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.7, SepalWidth: 3.2, PetalLength: 1.3, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.6, SepalWidth: 3.1, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.6, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.9, PetalLength: 1.7, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.6, SepalWidth: 3.4, PetalLength: 1.4, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.4, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.4, SepalWidth: 2.9, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.9, SepalWidth: 3.1, PetalLength: 1.5, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.7, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.8, SepalWidth: 3.4, PetalLength: 1.6, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.8, SepalWidth: 3.0, PetalLength: 1.4, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.3, SepalWidth: 3.0, PetalLength: 1.1, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.8, SepalWidth: 4.0, PetalLength: 1.2, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 4.4, PetalLength: 1.5, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.9, PetalLength: 1.3, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.5, PetalLength: 1.4, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 3.8, PetalLength: 1.7, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.8, PetalLength: 1.5, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.4, PetalLength: 1.7, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.7, PetalLength: 1.5, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.6, SepalWidth: 3.6, PetalLength: 1.0, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.3, PetalLength: 1.7, PetalWidth: 0.5 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.8, SepalWidth: 3.4, PetalLength: 1.9, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.0, PetalLength: 1.6, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    /*{ input: { SepalLength: 5.0, SepalWidth: 3.4, PetalLength: 1.6, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.2, SepalWidth: 3.5, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.2, SepalWidth: 3.4, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.7, SepalWidth: 3.2, PetalLength: 1.6, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.8, SepalWidth: 3.1, PetalLength: 1.6, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.4, PetalLength: 1.5, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.2, SepalWidth: 4.1, PetalLength: 1.5, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 4.2, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.9, SepalWidth: 3.1, PetalLength: 1.5, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.2, PetalLength: 1.2, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 3.5, PetalLength: 1.3, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.9, SepalWidth: 3.1, PetalLength: 1.5, PetalWidth: 0.1 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.4, SepalWidth: 3.0, PetalLength: 1.3, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.4, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.5, PetalLength: 1.3, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.5, SepalWidth: 2.3, PetalLength: 1.3, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.4, SepalWidth: 3.2, PetalLength: 1.3, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.5, PetalLength: 1.6, PetalWidth: 0.6 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.8, PetalLength: 1.9, PetalWidth: 0.4 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.8, SepalWidth: 3.0, PetalLength: 1.4, PetalWidth: 0.3 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 3.8, PetalLength: 1.6, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.6, SepalWidth: 3.2, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.3, SepalWidth: 3.7, PetalLength: 1.5, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 3.3, PetalLength: 1.4, PetalWidth: 0.2 }, output: { Iris_setosa: 1, Iris_versicolor: 0, Iris_Virginica: 0 } },*/
    { input: { SepalLength: 7.0, SepalWidth: 3.2, PetalLength: 4.7, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.4, SepalWidth: 3.2, PetalLength: 4.5, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.9, SepalWidth: 3.1, PetalLength: 4.9, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 2.3, PetalLength: 4.0, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.5, SepalWidth: 2.8, PetalLength: 4.6, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 2.8, PetalLength: 4.5, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.3, SepalWidth: 3.3, PetalLength: 4.7, PetalWidth: 1.6 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 4.9, SepalWidth: 2.4, PetalLength: 3.3, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.6, SepalWidth: 2.9, PetalLength: 4.6, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.2, SepalWidth: 2.7, PetalLength: 3.9, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 2.0, PetalLength: 3.5, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.9, SepalWidth: 3.0, PetalLength: 4.2, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.0, SepalWidth: 2.2, PetalLength: 4.0, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.1, SepalWidth: 2.9, PetalLength: 4.7, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.6, SepalWidth: 2.9, PetalLength: 3.6, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.1, PetalLength: 4.4, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.6, SepalWidth: 3.0, PetalLength: 4.5, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.7, PetalLength: 4.1, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.2, SepalWidth: 2.2, PetalLength: 4.5, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.6, SepalWidth: 2.5, PetalLength: 3.9, PetalWidth: 1.1 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.9, SepalWidth: 3.2, PetalLength: 4.8, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.1, SepalWidth: 2.8, PetalLength: 4.0, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.5, PetalLength: 4.9, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.1, SepalWidth: 2.8, PetalLength: 4.7, PetalWidth: 1.2 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.4, SepalWidth: 2.9, PetalLength: 4.3, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.6, SepalWidth: 3.0, PetalLength: 4.4, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.8, SepalWidth: 2.8, PetalLength: 4.8, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    /*{ input: { SepalLength: 6.7, SepalWidth: 3.0, PetalLength: 5.0, PetalWidth: 1.7 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.0, SepalWidth: 2.9, PetalLength: 4.5, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 2.6, PetalLength: 3.5, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 2.4, PetalLength: 3.8, PetalWidth: 1.1 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 2.4, PetalLength: 3.7, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.7, PetalLength: 3.9, PetalWidth: 1.2 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.0, SepalWidth: 2.7, PetalLength: 5.1, PetalWidth: 1.6 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.4, SepalWidth: 3.0, PetalLength: 4.5, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.0, SepalWidth: 3.4, PetalLength: 4.5, PetalWidth: 1.6 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.1, PetalLength: 4.7, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.3, PetalLength: 4.4, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.6, SepalWidth: 3.0, PetalLength: 4.1, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 2.5, PetalLength: 4.0, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.5, SepalWidth: 2.6, PetalLength: 4.4, PetalWidth: 1.2 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.1, SepalWidth: 3.0, PetalLength: 4.6, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.6, PetalLength: 4.0, PetalWidth: 1.2 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.0, SepalWidth: 2.3, PetalLength: 3.3, PetalWidth: 1.0 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.6, SepalWidth: 2.7, PetalLength: 4.2, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 3.0, PetalLength: 4.2, PetalWidth: 1.2 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 2.9, PetalLength: 4.2, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 6.2, SepalWidth: 2.9, PetalLength: 4.3, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.1, SepalWidth: 2.5, PetalLength: 3.0, PetalWidth: 1.1 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },
    { input: { SepalLength: 5.7, SepalWidth: 2.8, PetalLength: 4.1, PetalWidth: 1.3 }, output: { Iris_setosa: 0, Iris_versicolor: 1, Iris_Virginica: 0 } },*/
    { input: { SepalLength: 6.3, SepalWidth: 3.3, PetalLength: 6.0, PetalWidth: 2.5 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.7, PetalLength: 5.1, PetalWidth: 1.9 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.1, SepalWidth: 3.0, PetalLength: 5.9, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.9, PetalLength: 5.6, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.5, SepalWidth: 3.0, PetalLength: 5.8, PetalWidth: 2.2 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.6, SepalWidth: 3.0, PetalLength: 6.6, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 4.9, SepalWidth: 2.5, PetalLength: 4.5, PetalWidth: 1.7 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.3, SepalWidth: 2.9, PetalLength: 6.3, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.7, SepalWidth: 2.5, PetalLength: 5.8, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.2, SepalWidth: 3.6, PetalLength: 6.1, PetalWidth: 2.5 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.5, SepalWidth: 3.2, PetalLength: 5.1, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.4, SepalWidth: 2.7, PetalLength: 5.3, PetalWidth: 1.9 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.8, SepalWidth: 3.0, PetalLength: 5.5, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.7, SepalWidth: 2.5, PetalLength: 5.0, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.8, PetalLength: 5.1, PetalWidth: 2.4 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.4, SepalWidth: 3.2, PetalLength: 5.3, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.5, SepalWidth: 3.0, PetalLength: 5.5, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.7, SepalWidth: 3.8, PetalLength: 6.7, PetalWidth: 2.2 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.7, SepalWidth: 2.6, PetalLength: 6.9, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.0, SepalWidth: 2.2, PetalLength: 5.0, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.9, SepalWidth: 3.2, PetalLength: 5.7, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.6, SepalWidth: 2.8, PetalLength: 4.9, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.7, SepalWidth: 2.8, PetalLength: 6.7, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.7, PetalLength: 4.9, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.3, PetalLength: 5.7, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.2, SepalWidth: 3.2, PetalLength: 6.0, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.2, SepalWidth: 2.8, PetalLength: 4.8, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.1, SepalWidth: 3.0, PetalLength: 4.9, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.4, SepalWidth: 2.8, PetalLength: 5.6, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    /*{ input: { SepalLength: 7.2, SepalWidth: 3.0, PetalLength: 5.8, PetalWidth: 1.6 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.4, SepalWidth: 2.8, PetalLength: 6.1, PetalWidth: 1.9 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.9, SepalWidth: 3.8, PetalLength: 6.4, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.4, SepalWidth: 2.8, PetalLength: 5.6, PetalWidth: 2.2 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.8, PetalLength: 5.1, PetalWidth: 1.5 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.1, SepalWidth: 2.6, PetalLength: 5.6, PetalWidth: 1.4 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 7.7, SepalWidth: 3.0, PetalLength: 6.1, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.3, SepalWidth: 3.4, PetalLength: 5.6, PetalWidth: 2.4 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.4, SepalWidth: 3.1, PetalLength: 5.5, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.0, SepalWidth: 3.0, PetalLength: 4.8, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.9, SepalWidth: 3.1, PetalLength: 5.4, PetalWidth: 2.1 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.1, PetalLength: 5.6, PetalWidth: 2.4 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.9, SepalWidth: 3.1, PetalLength: 5.1, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.8, SepalWidth: 2.7, PetalLength: 5.1, PetalWidth: 1.9 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.8, SepalWidth: 3.2, PetalLength: 5.9, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.3, PetalLength: 5.7, PetalWidth: 2.5 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.7, SepalWidth: 3.0, PetalLength: 5.2, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.3, SepalWidth: 2.5, PetalLength: 5.0, PetalWidth: 1.9 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.5, SepalWidth: 3.0, PetalLength: 5.2, PetalWidth: 2.0 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 6.2, SepalWidth: 3.4, PetalLength: 5.4, PetalWidth: 2.3 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },
    { input: { SepalLength: 5.9, SepalWidth: 3.0, PetalLength: 5.1, PetalWidth: 1.8 }, output: { Iris_setosa: 0, Iris_versicolor: 0, Iris_Virginica: 1 } },*/
]);

function update() {
    
    var ta = document.getElementById("ta").value;
    var te = document.getElementById("te").value;
    var ti = document.getElementById("ti").value;
    var to = document.getElementById("to").value;

    if(ta.trim() == "" || te.trim() == "" || ti.trim() == "" || to.trim() == ""){
        alert("Debes rellenar todos los campos antes de comprobar")
    }else{

    var entrada = {
        SepalLength: parseFloat(ta.replace(",", ".")),
        SepalWidth: parseFloat(te.replace(",", ".")),
        PetalLength: parseFloat(ti.replace(",", ".")),
        PetalWidth: parseFloat(to.replace(",", ".")),
    };

    var resultado = network.run(entrada);
    let planta;

    if (resultado["Iris_setosa"] > resultado["Iris_versicolor"] && resultado["Iris_setosa"] > resultado["Iris_Virginica"]) {
        planta = "Iris Setosa"
    } else if (resultado["Iris_versicolor"] > resultado["Iris_setosa"] && resultado["Iris_versicolor"] > resultado["Iris_Virginica"]) {
        planta = "Iris Versicolor"
    } else {
        planta = "Iris Virginica"
    }
    document.getElementById("text").innerHTML = planta;
}
}