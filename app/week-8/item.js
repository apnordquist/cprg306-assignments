export default function ItemComp({ itemObj, onSelect }) {
  let { id, name, quantity, category } = itemObj;

  return (
    <li
      onClick={onSelect}
      value = {name}
      className="rounded-md max-w-72 p-2 m-2 bg-green-950 text-yellow-100"
    >
      <h3 className="font-bold text-xl m-1">{name}</h3>
      <p className="text-sm m-1">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
