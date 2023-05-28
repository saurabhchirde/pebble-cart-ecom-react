import { SyntheticEvent } from "react";

export interface SearchBarProps {
  onSubmit: (e: SyntheticEvent) => void;
  searchWrapper: string;
  micIcon: string;
  placeholder: string;
  onChange: (e: SyntheticEvent) => void;
  value: string;
  searchIcon: string;
}
