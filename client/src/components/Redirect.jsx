import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

function Redirect() {
  const { shortUrl } = useParams();
  console.log(shortUrl);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/${shortUrl}`);
        window.location.href = response.data.url;
      } catch (error) {
        setIs404(true);
      }
    };
    getUrl();
  }, [shortUrl]);

  return (
    <div>
      {is404 ? (
        <div>
          <div>Error 404</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn-cta" type="button">
              Back To Home
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Redirect;