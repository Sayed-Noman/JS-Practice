let color: any = "crimson";
color = 20;
color = true;
//color(); // error: color is not a function
//color.toUppercase(); // error: latest assignment is of type boolean
console.log(color);


const jsonString: string = '{"name": "John", "age": 30}';

// Parse the JSON string 
//const parsedData = JSON.parse(jsonString); // returns any type
const parsedData: { name: string, age: number } = JSON.parse(jsonString);

// Access the properties safely
console.log(parsedData.name);  // John
console.log(parsedData.age);   // 30