import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ISelect } from "./Select.interface";

export const Select = ({ value, items, onChange }: ISelect) => {
  return (
    <Listbox value={value} onChange={onChange} as="div" className="relative">
      {({ open }) => (
        <>
          <Listbox.Button as="button" type="button">
            {value.name}
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute z-10 translate-y-[10px]"
            >
              {items.map((item) => (
                <Listbox.Option key={item.id} value={item} as="li">
                  {({ active, selected }) => (
                    <button type="button">{item.name}</button>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
