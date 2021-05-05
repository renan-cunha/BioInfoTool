# BioInfoTool


## Install

### Requirements

* Linux or Mac and Ruby (≥ 1.8.7; preferably ≥ 2.0)
* NCBI BLAST+ (2.2.31+) 
* SequenceServer
* Java 11

```
sudo apt-get install openjdk-11-jdk-headless
sudo apt-get install ruby
sudo apt-get install ruby-dev
sudo apt-get install build-essential
sudo apt-get install ncbi-blast+
sudo gem install sequenceserver
```

## Usage

### Sequence Server

Enter the ```sequenceserver``` folder

```
cd sequenceserver
```

Extract data in the first use

```
make extract_data
```

Run the server

```
make run_server
```

### Java webapp

Download the ```.jar``` file release from the repository

Run the ```.jar``` file

```
java -jar BioinfoTool-0.0.1-SNAPSHOT.jar
```