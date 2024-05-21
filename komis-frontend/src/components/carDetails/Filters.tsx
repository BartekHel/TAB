
interface Props{
  color: {name:string,price:number},
   engine: {name:string,price:number};
    upholstery: {name:string,price:number};
    colorChange:(color:{name:string,price:number})=>void;
    engineChange:(enigne:{name:string,price:number})=>void;
    upholsteryChange:(upholstery:{name:string,price:number})=>void;
}

function Filters({color,engine,upholstery,colorChange,engineChange,upholsteryChange}: Props) {
  const colorOptions = [
    { name: "red", price: 100 },
    { name: "blue", price: 150 },
    { name: "green", price: 120 },
    { name: "black", price: 0 }
  ];

  const engineOptions = [
    { name: "diesel 2.0L BlueHDi", price: 1300 },
    { name: "diesel 1.6L TDI", price: 1000 },
    { name: "petrol 1.6", price: 0 },
    { name: "petrol 2.0L turbocharged", price: 1200 }
  ];

  const upholsteryOptions = [
    { name: "Premium Leather upholstery", price: 800 },
    { name: "Fabric upholstery", price: 0 }
  ];
  
  return (
    <div className='filters'>
      <div className='filter'>
        <label>Color</label>
        <select value={color.name} onChange={(e) => 
          colorChange(colorOptions.find(option => option.name === e.target.value) || { name: "", price: 0 })}>
          {colorOptions.map((option) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className='filter'>
        <label>Engine</label>
        <select value={engine.name} onChange={(e) => 
          engineChange(engineOptions.find(option => option.name === e.target.value) || { name: "", price: 0 })}>
          {engineOptions.map((option) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className='filter'>
        <label>Upholstery</label>
        <select value={upholstery.name} onChange={(e) => 
          upholsteryChange(upholsteryOptions.find(option => option.name === e.target.value) || { name: "", price: 0 })}>
          {upholsteryOptions.map((option) => (
            <option key={option.name} value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
