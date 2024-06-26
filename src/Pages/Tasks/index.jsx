import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonDescription,
  FilterButton,
  FilterCategory,
  FilterCategoryHeading,
  FilterInput,
  FilterLabel,
  FilterOptions,
  FiltersSection,
  FiltersWindow,
  SortButton,
  SortCategory,
  SortCategoryHeading,
  SortOptions,
  SortWindow,
  TasksContainer,
  Wrapper,
} from "./styled";
import TasksSection from "../../Components/TasksSection";
import { MdDone, MdOutlineFilterAlt, MdSort } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectTasks } from "../../../features/tasksSlice";
import Task from "../../Components/Task";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  const [filtersState, setFiltersState] = useState({
    isOpened: false,
    todoDate: {
      today: false,
      thisweek: false,
      pastDue: false,
    },
    priority: {
      high: false,
      medium: false,
      low: false,
    },
    state: {
      showDone: true,
      showPastDue: true,
    },
  });
  const [sortState, setSortState] = useState({
    isOpened: false,
    sortingMethod: null,
  });

  useEffect(() => {}, [filtersState]);

  return (
    <Wrapper>
      <TasksSection heading="Your tasks">
        <FiltersSection>
          <ButtonContainer>
            <ButtonDescription>Filter</ButtonDescription>
            <FilterButton
              isOpened={filtersState.isOpened}
              onClick={() => {
                setFiltersState({
                  ...filtersState,
                  isOpened: !filtersState.isOpened,
                });
              }}
            >
              <MdOutlineFilterAlt />
            </FilterButton>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonDescription> Sort</ButtonDescription>
            <FilterButton
              sortButton
              isOpened={sortState.isOpened}
              onClick={() => {
                setSortState({ ...sortState, isOpened: !sortState.isOpened });
              }}
            >
              <MdSort />
            </FilterButton>
          </ButtonContainer>
        </FiltersSection>
        {filtersState.isOpened ? (
          <FiltersWindow>
            {/* <FilterCategory>
            <FilterCategoryHeading>Your categories</FilterCategoryHeading>
            <FilterOptions>
              <FilterLabel>
                <FilterInput type="checkbox" /> Home
              </FilterLabel>
              <FilterLabel>
                <FilterInput type="checkbox" /> School
              </FilterLabel>
              <FilterLabel>
                <FilterInput type="checkbox" /> Work
              </FilterLabel>
            </FilterOptions>
          </FilterCategory> */}
            <FilterCategory>
              <FilterCategoryHeading>To do date</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.todoDate.today}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            todoDate: {
                              ...filters.todoDate,
                              today: !filters.todoDate.today,
                              thisweek: false,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Today
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.todoDate.thisweek}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            todoDate: {
                              ...filters.todoDate,
                              thisweek: !filters.todoDate.thisweek,
                              today: false,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  This week
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.todoDate.pastDue}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            todoDate: {
                              ...filters.todoDate,
                              pastDue: !filters.todoDate.pastDue,
                            },
                            state: {
                              ...filters.state,
                              showPastDue: true,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Past Due
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
            <FilterCategory>
              <FilterCategoryHeading>Priority</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.priority.high}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            priority: {
                              ...filters.priority,
                              high: !filters.priority.high,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  High
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.priority.medium}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            priority: {
                              ...filters.priority,
                              medium: !filters.priority.medium,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Medium
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.priority.low}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            priority: {
                              ...filters.priority,
                              low: !filters.priority.low,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Low
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
            <FilterCategory>
              <FilterCategoryHeading>State</FilterCategoryHeading>
              <FilterOptions>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.state.showDone}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            state: {
                              ...filters.state,
                              showDone: !filters.state.showDone,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Show done tasks
                </FilterLabel>
                <FilterLabel>
                  <FilterInput
                    type="checkbox"
                    isChecked={filtersState.state.showPastDue}
                    onClick={() => {
                      setFiltersState(
                        (filters) =>
                          (filters = {
                            ...filters,
                            todoDate: {
                              ...filters.todoDate,
                              pastDue: false,
                            },
                            state: {
                              ...filters.state,
                              showPastDue: !filters.state.showPastDue,
                            },
                          })
                      );
                    }}
                  >
                    <MdDone />
                  </FilterInput>
                  Show past due
                </FilterLabel>
              </FilterOptions>
            </FilterCategory>
          </FiltersWindow>
        ) : null}
        {sortState.isOpened ? (
          <SortWindow>
            <SortCategory>
              <SortCategoryHeading>By todo date</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={sortState.sortingMethod === "todoDate/ascending"}
                  onClick={() => {
                    const value = "todoDate/ascending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortAscending /> Form oldest to newest
                </SortButton>
                <SortButton
                  isChecked={sortState.sortingMethod === "todoDate/descending"}
                  onClick={() => {
                    const value = "todoDate/descending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortDescending /> Form newest to oldest
                </SortButton>
              </SortOptions>
            </SortCategory>
            <SortCategory>
              <SortCategoryHeading>By creation date</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={
                    sortState.sortingMethod === "creationDate/ascending"
                  }
                  onClick={() => {
                    const value = "creationDate/ascending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortAscending /> Form oldest to newest
                </SortButton>
                <SortButton
                  isChecked={
                    sortState.sortingMethod === "creationDate/descending"
                  }
                  onClick={() => {
                    const value = "creationDate/descending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortDescending /> Form newest to oldest
                </SortButton>
              </SortOptions>
            </SortCategory>
            <SortCategory>
              <SortCategoryHeading>By priority</SortCategoryHeading>
              <SortOptions>
                <SortButton
                  isChecked={sortState.sortingMethod === "priority/descending"}
                  onClick={() => {
                    const value = "priority/descending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortDescending /> From high to low
                </SortButton>
                <SortButton
                  isChecked={sortState.sortingMethod === "priority/ascending"}
                  onClick={() => {
                    const value = "priority/ascending";
                    setSortState({
                      ...sortState,
                      sortingMethod:
                        sortState.sortingMethod === value ? null : value,
                    });
                  }}
                >
                  <HiOutlineSortAscending /> From low to high
                </SortButton>
              </SortOptions>
            </SortCategory>
          </SortWindow>
        ) : null}
        <TasksContainer>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TasksContainer>
      </TasksSection>
    </Wrapper>
  );
}
