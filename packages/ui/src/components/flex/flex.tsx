import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

const flexDirectionClassName: { [key in FlexDirection]: string } = {
  row: 'flex-row',
  col: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'col-reverse': 'flex-col-reverse',
};
const justifyContentClassName: { [key in JustifyContent]: string } = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};
const alignItemsClassName: { [key in AlignItems]: string } = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Flex Direction: 'row' | 'row-reverse' | 'col' | 'col-reverse' */
  direction?: FlexDirection;
  /** Justify Content: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' */
  justify?: JustifyContent;
  /** Align Items: 'start' | 'end' | 'center' | 'stretch' | 'baseline' */
  align?: AlignItems;
  /** Child contents or components to be displayed within the flex layout */
  children: React.ReactNode;
  /** Additional classnames to be applied to the flex container */
  className?: string;
}

/**
 * Component for creating flex layouts with customizable direction, alignment, and justification.
 */

export function Flex(props: FlexProps) {
  const {
    direction = 'row',
    justify = 'start',
    align = 'center',
    children,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        makeClassName(`flex`),
        'flex w-full gap-3',
        flexDirectionClassName[direction],
        justifyContentClassName[justify],
        alignItemsClassName[align],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Flex.displayName = 'Flex';
