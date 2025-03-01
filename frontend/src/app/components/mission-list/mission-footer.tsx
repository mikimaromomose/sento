"use client";
import * as React from "react";
import styles from "./mission-footer.module.css";
import { Button } from "../button/button";
import StarIcon from "../icon/star-icon";

interface MissionFooterProps {
  handleClickTsukaritai: () => void
  officialSiteUrl?: string
  tsukaritai: number
}

/**
 * ActionFooter component displays action buttons in a footer layout
 */
function MissionFooter({handleClickTsukaritai, officialSiteUrl, tsukaritai}: MissionFooterProps) {
  return (
    <section className={styles.actionFooter}>
      <Button
        text={`ツカリタイ　${tsukaritai}`}
        onClick={handleClickTsukaritai ?? undefined}
        icon={StarIcon}
      />
      { officialSiteUrl
        && <Button
            text={`公式サイト`}
            theme="light"
            onClick={() => window.open(officialSiteUrl, '_blank')}
          />
      }
    </section>
  );
}

export default MissionFooter;
