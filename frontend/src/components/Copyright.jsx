import React from "react";
import { Box } from "@mui/system";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "../Styles/copyright.css";

export default function Copyright() {
  return (
    <Box>
      <hr />
      <p style={{ margin: "0.5rem", fontSize: "2rem" }}>
        Book
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            fontFamily: "roboto",
            textAlign: "center",
          }}
        >
          The
        </span>
        show{" "}
      </p>
      <p style={{ textAlign: "center", margin: "0"}}>
        <span className="QuickLinks">Help</span> |{" "}
        <span className="QuickLinks">contact</span> |{" "}
        <span className="QuickLinks">About Us</span> |{" "}
        <span className="QuickLinks">Customer Care</span> |{" "}
        <span className="QuickLinks">Feedback</span>
      </p>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <BsFacebook size={25} className="ICONS1" style={{ margin: "1rem" }} />
        <BsTwitter size={25} className="ICONS2" style={{ margin: "1rem" }} />
        <BsYoutube size={25} className="ICONS3" style={{ margin: "1rem" }} />
        <BsInstagram size={25} className="ICONS4" style={{ margin: "1rem" }} />
        <BsLinkedin size={25} className="ICONS1" style={{ margin: "1rem" }} />
      </div>
      <p style={{ textAlign: "center", marginBottom: "0" }}>
        The contents and images used on this site are copyright protected and
        copyright vests with the respective owners. Unauthorized use is
        prohibited and punishable by law.
      </p>
      <p>
        Copyright © <span>{new Date().getFullYear()}</span>
      </p>
    </Box>
  );
}
