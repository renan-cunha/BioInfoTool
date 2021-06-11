# Drosophila melanogaster Web App

This web app consists of a bioinformatic database that uses the fruit fly (Drosophila melanogaster) as reference. In it you can find a genome sequence with Blast, explore the genome with JBrowser, download many kinds of genome files and view its phylogenetic tree.

## Installation

### Requirements

* Linux or Mac and Ruby (≥ 1.8.7; preferably ≥ 2.0)
* NCBI BLAST+ (2.2.31+) 
* SequenceServer
* Java 11
* NPM

```
sudo apt-get install openjdk-11-jdk-headless
sudo apt-get install ruby
sudo apt-get install ruby-dev
sudo apt-get install build-essential
sudo apt-get install ncbi-blast+
sudo gem install sequenceserver
sudo apt install npm
```

## Usage

Clone the rep

```
git clone https://github.com/renan-cunha/BioInfoTool.git
```


Extract data in the first use

```
make get_data
```

Run the server

```
make run_server 
```

Open the link [http://localhost:8080/](http://localhost:8080/)

## Screenshots

![blast](https://raw.githubusercontent.com/renan-cunha/BioInfoTool/main/images/blast.png)

![jbrowser](https://raw.githubusercontent.com/renan-cunha/BioInfoTool/main/images/browser.png)

![phylo tree](https://github.com/renan-cunha/BioInfoTool/blob/main/images/phylo_tree.png)
