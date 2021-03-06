import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>Urlpameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリーパラメーターは{query.get("name")}です</p>
    </div>
  );
};
