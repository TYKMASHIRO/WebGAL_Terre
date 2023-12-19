import s from '../tabs/topbarTabs.module.scss';
import {ReactNode} from "react";

export function TabItem(props: { children: ReactNode, title?: string }) {
  return <div className={s.tabItem}>
    <div>
      {props.title && <div className={s.sidebar_gameconfig_title}>{props.title}</div>}
      <div className={s.topbarTabItemContainer}>
        {props.children}
      </div>
    </div>
    <div className={s.divider}/>
  </div>;
}
