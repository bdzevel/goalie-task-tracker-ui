import { Renderer } from 'angular2/src/core/render';
import { ElementRef, QueryList } from 'angular2/src/core/linker';
import { ControlValueAccessor } from './control_value_accessor';
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select ng-control="city">
 *   <option *ng-for="#c of cities" [value]="c"></option>
 * </select>
 * ```
 */
export declare class NgSelectOption {
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 */
export declare class SelectControlValueAccessor implements ControlValueAccessor {
    private _renderer;
    private _elementRef;
    value: string;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer, _elementRef: ElementRef, query: QueryList<NgSelectOption>);
    writeValue(value: any): void;
    registerOnChange(fn: () => any): void;
    registerOnTouched(fn: () => any): void;
    private _updateValueWhenListOfOptionsChanges(query);
}
