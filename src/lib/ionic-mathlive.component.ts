import { Component,  ViewChild , ElementRef,  OnInit, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as MathLive from 'mathlive';
declare var length;

@Component({
// tslint:disable-next-line
  selector: 'ionic-mathlive',
  templateUrl: './ionic-mathlive.component.html',
  styleUrls: ['./ionic-mathlive.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => IonMathliveComponent), multi: true }
  ]
})
export class IonMathliveComponent implements OnInit, ControlValueAccessor {

  @ViewChild('mathfield', { static: true}) mathfield: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('answer') answer: any;

  @Input() disabled = false;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onValueChange = new EventEmitter();

      onChange: any = () => { };
      onTouched: any = () => { };
      // get accessor


  constructor() {

  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {


                MathLive.makeMathField(this.mathfield.nativeElement, {
              onContentDidChange: this.writeValue,
                          virtualKeyboardMode: 'onfocus',
                          virtualKeyboards: 'all',

                        }


                        );

  }
  ngOnInit() {



  }

  get value(): any {

    return this.answer;

  }

  set value(val: any) {

    this.answer = val;
    this.onChange(val);
    this.onTouched();

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

 public writeValue = (mathfield: any) => {
    this.answer = mathfield.$text();


    this.onValueChange.emit(this.answer);


    }



  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }


}

