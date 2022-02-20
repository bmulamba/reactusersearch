import React from "react";
import { Card } from "../Card/Card";
import './CardList.css'

export const CardList = (props) => (
    <div className="card-list">
        {
          props.userList.map(user => {
            return (
              <div key={user.id}>
                  <Card userUnic = {user} />
              </div>
            )
          })
        }
    </div>
)