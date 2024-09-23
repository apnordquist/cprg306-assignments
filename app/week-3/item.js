export default function ItemComp({ itemObj }) {
  let { name, quantity, category } = itemObj;
  return (
    <li className="basis-72 rounded-md p-2 m-4 bg-green-950 text-yellow-100">
      <h3 className="font-bold text-xl m-1">{name}</h3>
      <p className="text-sm m-1">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
