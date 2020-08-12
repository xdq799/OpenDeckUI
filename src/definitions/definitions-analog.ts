import { IBlockDefinition, FormInputComponent, DefinitionType } from ".";
import { Block } from "./definitions-device";

export const defaultAnalogData: Dictionary<number> = {
  enabled: (null as unknown) as number,
  invert: (null as unknown) as number,
  type: (null as unknown) as number,
  midiIdLSB: (null as unknown) as number,
  midiIdMSB: (null as unknown) as number,
  lowerCCLimitLSB: (null as unknown) as number,
  lowerCCLimitMSB: (null as unknown) as number,
  upperCCLimitLSB: (null as unknown) as number,
  upperCCLimitMSB: (null as unknown) as number,
  midiChannel: (null as unknown) as number,
};

export enum AnalogType {
  ControlChange7Bit = 0,
  Note = 1,
  FSR = 2,
  Button = 3,
  NRPN7 = 4,
  NRPN14 = 5,
  PitchBend = 6,
  ControlChange14Bit = 7,
}

type formState = typeof defaultAnalogData;

export const AnalogSectionDefinitions: Dictionary<IBlockDefinition> = {
  Enabled: {
    block: Block.Analog,
    key: "enabled",
    type: DefinitionType.ComponentValue,
    section: 0,
    component: FormInputComponent.Toggle,
    label: "Enabled",
    helpText: ``,
  },
  Invert: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    key: "invert",
    type: DefinitionType.ComponentValue,
    section: 1,
    component: FormInputComponent.Toggle,
    label: "Invert direction",
    helpText: ``,
    block: Block.Analog,
  },
  Type: {
    key: "type",
    type: DefinitionType.ComponentValue,
    section: 2,
    component: FormInputComponent.Select,
    options: [
      { value: AnalogType.ControlChange7Bit, text: "Control change 7-bit" },
      { value: AnalogType.Note, text: "Note" },
      { value: AnalogType.FSR, text: "FSR" },
      { value: AnalogType.Button, text: "Button" },
      { value: AnalogType.NRPN7, text: "NRPN 7-bit" },
      { value: AnalogType.NRPN14, text: "NRPN 14-bit" },
      { value: AnalogType.PitchBend, text: "Pitch bend" },
      { value: AnalogType.ControlChange14Bit, text: "Control change 14-bit" },
    ],
    label: "Type",
    helpText: ``,
    block: Block.Analog,
  },
  MidiIdLSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    key: "midiIdLSB",
    type: DefinitionType.ComponentValue,
    section: 3,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "MIDI ID (LSB)",
    helpText: "",
    block: Block.Analog,
    isLsb: true,
  },
  MidiIdMSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    isMsb: true,
    key: "midiIdMSB",
    type: DefinitionType.ComponentValue,
    section: 4,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "MIDI ID (MSB)",
    helpText: "",
    block: Block.Analog,
  },
  LowerCCLimitLSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    isLsb: true,
    key: "lowerCCLimitLSB",
    type: DefinitionType.ComponentValue,
    section: 5,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "Lower CC limit (LSB)",
    helpText: "",
    block: Block.Analog,
  },
  LowerCCLimitMSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    isMsb: true,
    key: "lowerCCLimitMSB",
    type: DefinitionType.ComponentValue,
    section: 6,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "Lower CC limit (MSB)",
    helpText: "",
    block: Block.Analog,
  },
  UpperCCLimitLSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    isLsb: true,
    key: "upperCCLimitLSB",
    type: DefinitionType.ComponentValue,
    section: 7,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "Upper CC limit (LSB)",
    helpText: "",
    block: Block.Analog,
  },
  UpperCCLimitMSB: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    isMsb: true,
    key: "upperCCLimitMSB",
    type: DefinitionType.ComponentValue,
    section: 8,
    component: FormInputComponent.Input,
    min: 0,
    max: 127,
    label: "Upper CC limit (MSB)",
    helpText: "",
    block: Block.Analog,
  },
  MidiChannel: {
    showIf: (formState: FormState): boolean =>
      formState.type !== AnalogType.Button,
    key: "midiChannel",
    type: DefinitionType.ComponentValue,
    section: 9,
    component: FormInputComponent.Input,
    min: 0,
    max: 16,
    label: "MIDI channel",
    helpText: "",
    block: Block.Analog,
  },
};
