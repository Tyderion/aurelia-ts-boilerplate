import { PageObject_Welcome } from './welcome.po';
import { PageObject_Skeleton } from './skeleton.po';
import { browser, element, by, By, $, $$, ExpectedConditions } from 'aurelia-protractor-plugin/protractor';
import { config } from '../protractor.conf';

describe('aurelia skeleton app', () => {
  let po_welcome: PageObject_Welcome;
  let po_skeleton: PageObject_Skeleton;

  beforeEach(() => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage(`http://localhost:${config.port}`);
  });

  it('should load the page and display the initial page title', async () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Translation Title');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('John');
    po_welcome.setLastname('Doe');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe('JOHN DOE');
  });

  it('should show alert message when clicking submit button', () => {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', () => {
    po_skeleton.navigateTo('/users');
    browser.sleep(500);
    expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Translation Title');
  });
});
