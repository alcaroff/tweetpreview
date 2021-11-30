import { Spacer, Textarea } from "@nextui-org/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addGlobal } from "../redux/actions";
import { useAppSelector } from "../redux/hooks";

export default function Form() {
  const dispatch = useDispatch();
  const tweetText = useAppSelector((s) => s.global.tweetText);
  const handleChange = (e: React.ChangeEvent<any>) => {
    dispatch(addGlobal("tweetText", e.target.value));
  };

  return (
    <div style={{ width: "100%" }}>
      <Textarea
        maxRows={16}
        bordered
        // color="primary"
        placeholder="Tweet text"
        onChange={handleChange}
        value={tweetText}
        color={tweetText.length > 280 ? "error" : undefined}
        status={tweetText.length > 280 ? "error" : undefined}
        width="100%"
        helperText={`${tweetText.length} / 280`}
      />
      <Spacer />
      {/* <Button color="gradient" size="small">
        Randomize user
      </Button> */}
    </div>
  );
}
