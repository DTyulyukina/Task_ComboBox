import React, { createRef, useEffect, useMemo, useState } from 'react';

import './combo-box.scss';

interface ComboBoxProps {
  value: string | undefined;
  onChange: (value: string) => void;
  optionList: string[];
  defaultValue?: string;
}

enum ECodeKeys {
  ENTER = 'Enter'
}

export const ComboBox: React.FC<ComboBoxProps> = ({
  value,
  onChange,
  optionList,
  defaultValue
}) => {
  const [valueComboBox, setValueComboBox] = useState<string | undefined>('');
  const refComboBox = createRef<HTMLInputElement>();
  const [isShowListComboBox, setIsShowListComboBox] = useState<boolean>(false);

  useEffect(() => {
    defaultValue && value === undefined
      ? setValueComboBox(defaultValue)
      : setValueComboBox(value);
  });

  const optionListComboBox = useMemo(
    () =>
      value
        ? optionList.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
          )
        : optionList,
    [value, optionList]
  );

  const addListValue = (
    event: React.SyntheticEvent<EventTarget>,
    index: number
  ) => {
    event.stopPropagation();

    onChange(optionListComboBox[index]);

    setIsShowListComboBox(false);
  };

  const changeValue = (event: React.SyntheticEvent<EventTarget>) => {
    onChange((event.target as HTMLInputElement)?.value);
  };

  const updateShowListOptions = () => {
    setIsShowListComboBox(true);

    refComboBox.current?.focus();
  };

  const updateHideListOptions = () => {
    setIsShowListComboBox(false);
  };

  const onKeyDownComboBox = (event: React.KeyboardEvent) => {
    if (event.key === ECodeKeys.ENTER) {
      refComboBox.current?.blur();

      onChange(refComboBox.current?.value as string);
    }
  };

  const valueOptions = useMemo(() => {
    return (
      <div
        className="option-list"
        style={{ display: isShowListComboBox ? 'block' : 'none' }}
      >
        {optionListComboBox?.length ? (
          optionListComboBox.map((item, index) => {
            return (
              <div
                className="option"
                key={item}
                onClick={(event) => addListValue(event, index)}
              >
                {item}
              </div>
            );
          })
        ) : (
          <div className="no-option">No option..</div>
        )}
      </div>
    );
  }, [optionListComboBox, value, isShowListComboBox]);

  return (
    <form
      style={{ display: 'inline-block', height: 'auto' }}
      onClick={updateShowListOptions}
      onFocus={updateShowListOptions}
      onMouseLeave={updateHideListOptions}
      onKeyDown={onKeyDownComboBox}
    >
      <input
        className="combo-box"
        onChange={changeValue}
        value={valueComboBox}
        ref={refComboBox}
      />
      {valueOptions}
    </form>
  );
};
