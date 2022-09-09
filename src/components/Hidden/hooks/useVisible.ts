import {
  filterKeys,
  findMatchKey,
  matchThreshold,
} from "@/utils/theme/utils/helper";
import type { matchThresholdKey } from "@/utils/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import type { Theme } from "@/utils/theme/types/index.types";

const useVisible = (props: object) => {
  const matchKeys = filterKeys(
    Object.keys(matchThreshold),
    findMatchKey(props)
  )?.[0] as matchThresholdKey;

  const match = matchThreshold[matchKeys];

  return useMediaQuery((theme: Theme) => {
    return (theme.breakpoints as any)[match.query](match.key);
  });
};

export default useVisible;
