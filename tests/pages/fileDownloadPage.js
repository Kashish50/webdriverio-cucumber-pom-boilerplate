const NativePage = require('./native.page.js');
const inputFormData = require('../files/testData/inputFormData.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

const path = require('path')
const fs = require('fs')
const waitForFileExists = require('../../util/waitForFileExists')

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';

class FileDownloadFormPage extends NativePage {

    get downloadFormPageElement() {
        return this.getPage('downloadPageLocators');
      }

         randomInt(min, max) {
        return Math.random() * (max - min) + min;
      }
  
        navigateToURL() {
        browser.url(inputFormData['url']);
      }

      validateGenerateFileButtonDisplayed(){
          const genFileBtn = $(this.downloadFormPageElement.generateFileButton)
          genFileBtn.isDisplayed().should.equal(true)
      }
      

      validateGenerateFileButtonDisabled(){
        const genFileBtn = $(this.downloadFormPageElement.generateFileButton)
        genFileBtn.isEnabled().should.equal(false)
       }

       enterDataInTextBox(){
        const textBox = $(this.downloadFormPageElement.enterDataTextbox)
        
        var a = this.randomInt(10,60)
        var b= Math.floor(a)
        textBox.setValue("TestingFileDownload"+b)
        
       }

       validateGenerateFileButtonEnabled(){
        const genFileBtn = $(this.downloadFormPageElement.generateFileButton)
        genFileBtn.isEnabled().should.equal(true)
       }

       clickGenerateFileButton(){
        const genFileBtn = $(this.downloadFormPageElement.generateFileButton)
        genFileBtn.click()
       }

       validateDownloadLinkDisplayed(){
        const linkDownload = $(this.downloadFormPageElement.linkDownload)
        linkDownload.isDisplayed().should.equal(true)
       }

       clickDownloadLink(){
        const linkDownload = $(this.downloadFormPageElement.linkDownload)
        linkDownload.click()
       }

       validateFileIsDownloaded(){
        const linkDownload = $(this.downloadFormPageElement.linkDownload)
        const downloadHref = linkDownload.getAttribute('href')
        
        const downloadUrl = new URL(downloadHref)
        const fullPath = downloadUrl.pathname
        const splitPath = fullPath.split('/')
        const fileName = splitPath.splice(-1)[0]

        const filePath = path.join(global.downloadDir, fileName)

        browser.call(function (){
          // call our custom function that checks for the file to exist
          return waitForFileExists(filePath, 60000)
        });
        const fileContents = fs.readFileSync(filePath, 'utf-8')

        fileContents.should.include("TestingFileDownload")

       }

    }  
module.exports= FileDownloadFormPage;
