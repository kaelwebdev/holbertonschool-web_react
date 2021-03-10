import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";


describe("Header.test.js", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('correct component rendering', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it('img exist', () => {
    const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('h1 exist', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(
      wrapper.containsMatchingElement(<h1>School dashboard</h1>)
    ).toBeTruthy();
  });
});
