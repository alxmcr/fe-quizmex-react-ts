import { Icon110x110ListFail } from "./110x110/Icon110x110ListFail";
import { Icon110x110Poncho } from "./110x110/Icon110x110Poncho";
import { Icon110x110RetryFailed } from "./110x110/Icon110x110RetryFailed";
import { Icon110x110Star } from "./110x110/Icon110x110Star";

interface Props extends React.SVGProps<SVGSVGElement> {
  iconName: string;
}

export function AppIcon110x110({ iconName = "" }: Props) {
  switch (iconName) {
    case "star": {
      return <Icon110x110Star />;
    }

    case "list-fail": {
      return <Icon110x110ListFail />;
    }

    case "poncho": {
      return <Icon110x110Poncho />;
    }

    case "retry-failed": {
      return <Icon110x110RetryFailed />;
    }

    default: {
      return null;
    }
  }
}
