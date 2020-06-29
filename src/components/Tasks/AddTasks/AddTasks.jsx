import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AddTasks.css";

const AddTasks = ({ onAddTask, activeItem }) => {
  //Состояние поля ввода
  const [visibleInput, setVisibleInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //Закрытие и очистка поля ввода при переходи на другой список
  useEffect(() => {
    onClose();
  }, [activeItem]);

  //Обнуление поля ввода
  const onClose = () => {
    setInputValue("");
    setVisibleInput(false);
  };

  //Добавление задачи
  const AddTask = () => {
    axios
      .post("http://localhost:3001/tasks", {
        text: inputValue,
        listId: activeItem.id,
      })
      .then(({ data }) => {
        onAddTask(data);
        onClose();
      });
  };

  return (
    <div className="tasks__form">
      {
        //Блок новая задача
        !visibleInput ? (
          <div
            className="tasks__form-new"
            onClick={() => setVisibleInput(true)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 1V15" stroke="#B4B4B4" />
              <path d="M1 8H15" stroke="#B4B4B4" />
            </svg>
            <span>Новая задача</span>
          </div>
        ) : (
          //Бдок поле ввода
          <div className="tasks__form-block">
            {
              //Поле ввода
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Текст задачи"
                type="text"
              />
            }
            <div className="block-buttons">
              {
                //Кнопка Добавить задачу
                <button
                  disabled={!inputValue}
                  onClick={AddTask}
                  className="button-add"
                >
                  Добавить задачу
                </button>
              }
              {
                //Кнопка отмена
                <button
                  onClick={() => setVisibleInput(false)}
                  className="button-cancel"
                >
                  Отмена
                </button>
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default AddTasks;
