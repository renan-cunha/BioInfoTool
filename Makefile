.PHONY: extract_data run_server get_data

## Download and extract data
get_data:
	mkdir -p sequenceserver/data
	mkdir -p sequenceserver/data/blast_data
	wget http://bioinfotoolufpa.s3.amazonaws.com/blast_data.zip -O sequenceserver/data/blast_data/blast_data.zip
	unzip sequenceserver/data/blast_data/blast_data.zip -d sequenceserver/data/blast_data/
	wget http://ftp.flybase.net/genomes/Drosophila_melanogaster/current/fasta/dmel-all-gene-r6.39.fasta.gz -O jbrowse2/dmel-all-gene-r6.39.fasta.gz
	wget http://ftp.flybase.net/genomes/Drosophila_melanogaster/current/fasta/dmel-all-transcript-r6.39.fasta.gz -O jbrowse2/dmel-all-transcript-r6.39.fasta.gz
	gzip -d jbrowse2/dmel-all-transcript-r6.39.fasta.gz
	gzip -d jbrowse2/dmel-all-gene-r6.39.fasta.gz

## Run the BLAST server
run_server:
	sequenceserver -d sequenceserver/data/blast_data/ &
	npx serve jbrowse2/ &
	java -jar BioinfoTool-0.0.1-SNAPSHOT.jar

.DEFAULT_GOAL := help

# Inspired by <http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html>
# sed script explained:
# /^##/:
# 	* save line in hold space
# 	* purge line
# 	* Loop:
# 		* append newline + line to hold space
# 		* go to next line
# 		* if line starts with doc comment, strip comment character off and loop
# 	* remove target prerequisites
# 	* append hold space (+ newline) to line
# 	* replace newline plus comments by `---`
# 	* print line
# Separate expressions are necessary because labels cannot be delimited by
# semicolon; see <http://stackoverflow.com/a/11799865/1968>
.PHONY: help
help:
	@echo "$$(tput bold)Available rules:$$(tput sgr0)"
	@echo
	@sed -n -e "/^## / { \
		h; \
		s/.*//; \
		:doc" \
		-e "H; \
		n; \
		s/^## //; \
		t doc" \
		-e "s/:.*//; \
		G; \
		s/\\n## /---/; \
		s/\\n/ /g; \
		p; \
	}" ${MAKEFILE_LIST} \
	| LC_ALL='C' sort --ignore-case \
	| awk -F '---' \
		-v ncol=$$(tput cols) \
		-v indent=19 \
		-v col_on="$$(tput setaf 6)" \
		-v col_off="$$(tput sgr0)" \
	'{ \
		printf "%s%*s%s ", col_on, -indent, $$1, col_off; \
		n = split($$2, words, " "); \
		line_length = ncol - indent; \
		for (i = 1; i <= n; i++) { \
			line_length -= length(words[i]) + 1; \
			if (line_length <= 0) { \
				line_length = ncol - indent - length(words[i]) - 1; \
				printf "\n%*s ", -indent, " "; \
			} \
			printf "%s ", words[i]; \
		} \
		printf "\n"; \
	}' \
	| more $(shell test $(shell uname) = Darwin && echo '--no-init --raw-control-chars')


