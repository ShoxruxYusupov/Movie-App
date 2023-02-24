import { Pagination } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

function PaginationComp({ count, setId, id, title }) {
  if (window.scrollY > 0) {
    window.scroll(0, 0);
  }
  const navigate = useNavigate();
  return (
    <>
      <Pagination
        count={count}
        color="secondary"
        defaultPage={id ? +id : 1}
        hideNextButton
        hidePrevButton
        onChange={(e) => {
          setId(e.target.textContent);
          navigate(`/${title}/pages/${e.target.textContent}`);
        }}
      />
    </>
  );
}

export default PaginationComp;
