export default function ListGroup({ data, handleAddItem }) {
  return (
    <>
      {" "}
      <div className="list-group">
        {data.map((v) => {
          return (
            <a
              key={v.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => {
                handleAddItem(v);
              }}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{v.name}</h5>
                <small>{v.price}</small>
              </div>
              <p className="mb-1">{v.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
