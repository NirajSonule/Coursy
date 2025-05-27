import Button from "./Button";

const PriceCard = ({ title, price, list, className }) => {
  return (
    <div className={`p-6 flex flex-col items-center ${className}`}>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <h2 className="text-2xl font-bold mb-6">$ {price}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex-grow" />
      <Button className="mt-12 w-48">Buy Now</Button>
    </div>
  );
};

export default PriceCard;
