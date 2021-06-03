import React, { useState,useEffect } from "react";
import {
  Divider,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from "@material-ui/core";
import { useStateProviderValue } from "../StateProvider";

export default function AppListItem({ app }) {
  const [checked, setChecked] = useState(false);
  const [{ blockedApps ,dbData}, dispatch] = useStateProviderValue();
useEffect(()=>{

  dbData?.data.BlockedApps.map((item)=>{
    if(item==app)setChecked(!checked)
  })
},[dbData])
  const handleToggle = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    if (checked) {
      dispatch({
        type: "SETBLOCKEDAPPS",
        blockedApps: [...blockedApps, app],
      });
    } else {
      blockedApps.splice(blockedApps.indexOf(app), 1);
      dispatch({
        type: "SETBLOCKEDAPPS",
        blockedApps: blockedApps,
      });
    }
  }, [checked]);
console.log(blockedApps)
  return (
    <>
      <ListItem>
        <ListItemText id={"switch-list-label-" + app} primary={app} />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle}
            checked={checked}
            inputProps={{ "aria-labelledby": "switch-list-label-" + app }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}
