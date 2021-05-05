# BioInfoTool


## Install

### Requirements

* Linux or Mac and Ruby (≥ 1.8.7; preferably ≥ 2.0)
* NCBI BLAST+ (2.2.31+) 
* SequenceServer

```
sudo apt-get install ruby
sudo apt-get install ruby-dev
sudo apt-get install build-essential
sudo apt-get install ncbi-blast+
sudo gem install sequenceserver
```

## Usage

Extract data in the first use

```
make extract_data
```

Run the server

```
make run_server
```

Open the browser in the defined address